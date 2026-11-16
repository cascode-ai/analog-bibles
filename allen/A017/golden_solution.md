# Golden Solution - A017

## Reference answer

No. In this flow the heavy (n⁺/p⁺) doping is implanted only after the polysilicon has been deposited and patterned, and the polysilicon (with its spacers) masks the implant, so the silicon under any polysilicon never receives a heavy dose. The gate is self-aligned: diffusion appears only beside the poly, never under it.

- The only silicon under thin oxide and polysilicon is the channel/well region, doped only by the light well, field and threshold implants (e.g. the accumulation-type capacitor of polysilicon over an n-well has a lightly doped bottom plate).
- The lateral spread of the LDD and source/drain dopants puts a heavily doped sliver under the gate edges (the gate overlap), but that is a small parasitic, not a usable structure.
- To get polysilicon over heavily doped diffusion with thin oxide (e.g. a poly-to-diffusion capacitor with a low-resistance bottom plate) the process needs an extra mask and a heavy implant before the polysilicon deposition (through or before the gate oxide), which this flow does not have.

## Grading notes

+2: "no", because the source/drain (heavy) implant comes after the polysilicon is defined and the polysilicon blocks it (self-aligned gate), with the remark that an extra implant step before the poly would be needed. Mentioning the small overlap under the gate edges is a plus, not required. +1: correct conclusion with the reason only partly stated (e.g. "poly masks the implant" without noting the order of the steps). 0: an answer that says it depends on adding a step without committing, but gives the correct mechanism. −2 (asserted as fact): "yes, the n⁺ implant can be placed under the poly in this flow", or "yes, the n-well under the poly is a heavily doped diffusion".
