# Detailed solution - R686

**Approach.** A mask is needed only where a step must be patterned and no structure already on the wafer can define where it acts. Walk through a minimal NMOS-only process with two metal layers and, for each step, decide whether it needs a new mask or can be done as a blanket step or self-aligned to existing features. Then count the masks.

### Step 1 — What an NMOS-only process does *not* need

CMOS needs an **n-well mask** (regions for the PMOS devices) and **n+/p+ select masks** (to steer each source/drain implant to its device type) only because it has two transistor types. With only n-type transistors on a p-type wafer, no well is required, every source/drain receives the same n+ implant, and every channel the same threshold-adjust implant, so all of these masks disappear.

### Step 2 — Front end: isolation and gate

**1. Starting wafer.** A p-type wafer; grow a thin pad oxide and deposit silicon nitride (the LOCOS oxidation mask).

**2. Active-area definition — Mask 1 (active).** Pattern the nitride so that it remains only over the future active areas. With the same resist pattern in place, do the p-type **channel-stop (field) implant** into the exposed field regions (no extra mask). Grow the thick field oxide where the nitride is absent, then strip the nitride and pad oxide.

**3. Gate oxide and threshold adjust (no mask).** Grow the gate oxide. A threshold-adjust implant, if used, is **blanket**: every transistor is an NMOS device with the same target threshold.

**4. Gates — Mask 2 (poly).** Deposit polysilicon and pattern the gates and poly lines.

**5. Source/drain implant (no mask).** Implant n+ over the whole wafer: the poly gates block it over the channels and the field oxide over the field, so the sources and drains are **self-aligned** to the gate and the field oxide, and the poly is doped n+ as well. Anneal. (LDD spacers or silicide, if used, are self-aligned too.)

**Substrate contact.** The p-type substrate is contacted through the back of the wafer. A front-side p+ substrate tie would need a mask to keep the blanket n+ implant out of it, plus a p+ implant, i.e. one more mask; the minimal process avoids it.

### Step 3 — Back end: two metal layers

**6. Contacts — Mask 3 (contact).** Deposit an interlayer dielectric and open windows to the n+ diffusions and the poly.

**7. First metal — Mask 4 (metal 1).** Deposit and pattern metal 1.

**8. Vias — Mask 5 (via).** Deposit the inter-metal dielectric and open vias from metal 2 to metal 1.

**9. Second metal — Mask 6 (metal 2).** Deposit and pattern metal 2.

**10. Passivation — Mask 7 (pad openings).** Deposit a passivation layer over the chip and open the bonding pads.

### Step 4 — The count

| # | Mask | Purpose |
|---|---|---|
| 1 | Active (and channel stop) | Define active areas vs. field oxide |
| 2 | Poly | Gates and poly wires |
| 3 | Contact | Openings from metal 1 to diffusion/poly |
| 4 | Metal 1 | First wiring layer |
| 5 | Via | Openings from metal 2 to metal 1 |
| 6 | Metal 2 | Second wiring layer |
| 7 | Pad (passivation) | Openings for bonding pads |

Done **without** a mask: the channel-stop implant (shares mask 1), the threshold-adjust implant (blanket), the n+ source/drain implant (self-aligned to poly and field oxide), and spacer/silicide formation (self-aligned).

The minimum is therefore **6 masks** for the devices and the two metal levels, plus **1** for the pad openings: **7 in total** (6 if the passivation mask is not counted).

**Comparison with CMOS.** The same two-metal flow in CMOS adds an n-well mask and a source/drain select mask (the p+ implant is masked, and the n+ implant uses the same mask with the opposite polarity, or a second mask), i.e. at least 9 masks. Historical NMOS logic with depletion-mode loads also needed a depletion-implant mask (and often a buried-contact mask); a process with only one type of enhancement NMOS does not.

### Result

**Minimum: 6 patterning masks** (active, poly, contact, metal 1, via, metal 2), **plus 1 pad-opening (passivation) mask, i.e. 7 in total.** No n-well mask and no n+/p+ select mask are needed: the channel-stop implant shares the active mask, the threshold-adjust implant is blanket, and the n+ source/drain implant is unmasked because the sources and drains are self-aligned to the poly gates and the field oxide.

**Common mistake.** Including an n-well mask or other PMOS-related masks (giving 9 or more). Without PMOS transistors there is nothing to put in a well and nothing to separate between n+ and p+ implants.

**Common mistake.** Counting a separate mask for every implant. The channel-stop implant uses the active mask, the threshold adjust is blanket, and the source/drain implant is self-aligned.

**Common mistake.** Forgetting the contact or via masks (giving 5 or fewer). Each metal layer needs its own wiring mask and a mask for the holes to the layer below.
