import bpy
import os

obj = bpy.data.objects["t-shirt.002"]
bpy.context.view_layer.objects.active = obj
obj.select_set(True)

# The Marvelous Designer sim mesh is extremely dense (199k verts) -- decimate
# heavily for a web-friendly file size while keeping silhouette clean.
mod = obj.modifiers.new(name="Decimate", type='DECIMATE')
mod.ratio = 0.08
bpy.ops.object.modifier_apply(modifier=mod.name)

print(f"Post-decimate verts: {len(obj.data.vertices)}")

# Recenter + scale to a sane unit box for three.js (roughly -1..1)
dims = obj.dimensions
max_dim = max(dims)
scale_factor = 1.6 / max_dim
obj.scale = (scale_factor, scale_factor, scale_factor)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Drop the missing external texture reference; assign a plain neutral
# color so the export doesn't try (and fail) to embed a broken image.
mat = bpy.data.materials.get("FABRIC 1_FRONT_4193")
if mat and mat.node_tree:
    principled = next(
        (n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED"), None
    )
    tex_node = next(
        (n for n in mat.node_tree.nodes if n.type == "TEX_IMAGE"), None
    )
    if principled and tex_node:
        for link in list(mat.node_tree.links):
            if link.to_node == principled and link.from_node == tex_node:
                mat.node_tree.links.remove(link)
        mat.node_tree.nodes.remove(tex_node)
    if principled:
        principled.inputs["Base Color"].default_value = (1.0, 1.0, 1.0, 1.0)
        principled.inputs["Roughness"].default_value = 0.85

out_path = r"C:\Users\MJ\Desktop\Vyro\New folder\public\models\tshirt.glb"
os.makedirs(os.path.dirname(out_path), exist_ok=True)

bpy.ops.export_scene.gltf(
    filepath=out_path,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_yup=True,
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=6,
)

print("Exported to", out_path)
print("File size:", os.path.getsize(out_path), "bytes")
