# Detailed solution - A017

The question is whether any step in the given order can place a heavy n⁺ or p⁺ dose in silicon that ends up under thin oxide and polysilicon. Track, for silicon under a polysilicon line, which implants it can receive before and after the polysilicon is deposited.

### Step 1 — What happens before the polysilicon

Before polysilicon deposition the flow contains only the n-well and p-well implants, the field implants and gate-oxide growth. These are light doses chosen to set well doping and isolation. No heavy implant exists at this point, so silicon that will later sit under polysilicon is only lightly doped when the gate oxide is grown and the polysilicon is laid on top.

### Step 2 — What happens after the polysilicon

Every heavy implant comes later: the n⁺ and p⁺ source/drain implants follow polysilicon patterning, the LDD implants and the spacer formation. The statement says the polysilicon gates and spacers block these implants, which is what makes the process self-aligned: the diffusion forms only beside the polysilicon, never under it. Silicon covered by polysilicon is therefore shielded from every heavy dose.

### Step 3 — Conclusion

**No.** With this flow the silicon under any thin oxide and polysilicon is the channel or well region, doped only by the light well, field and threshold implants. A thin-oxide structure with polysilicon on top can be made, for example an accumulation-mode capacitor of polysilicon over an n-well, but its bottom plate is lightly doped, not a heavily doped diffusion.

The lateral spread of the LDD and source/drain dopants does put a narrow heavily doped sliver under each gate edge (the gate overlap). That is a small parasitic region tied to every transistor edge, not a usable poly-over-diffusion structure.

### Step 4 — What would be needed

To build polysilicon over a heavily doped diffusion with thin oxide between them, for example a poly-to-diffusion capacitor with a low-resistance bottom plate, the process needs an extra mask and a heavy implant performed before the polysilicon deposition (before or through the gate oxide). The given flow has no such step, so the structure cannot be made with it alone.
