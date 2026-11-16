# Detailed solution - R686

**Approach.** A mask is needed only where a step must be *patterned*, i.e. where something must happen in some places and not in others and no existing structure can define those places. Walk through a minimal NMOS-only process with two metal layers, start to finish, and for each step ask: does it need a new mask, or can it be done as a blanket step, or self-aligned to features already on the wafer? Then count the masks.

### Step 1 — What an NMOS-only process does *not* need

A CMOS process needs extra masks only because it has two transistor types:

- an **n-well mask**, to create the n-type regions in which PMOS devices sit;
- **n+ and p+ select masks**, to steer the n+ source/drain implant to the NMOS devices and the p+ implant to the PMOS devices.

With only n-type transistors on a p-type wafer, no well is required, every source/drain receives the same n+ implant, and every channel receives the same threshold-adjust implant. All of these masks disappear.

### Step 2 — Front end: isolation and gate

**1. Starting wafer.** A p-type silicon wafer. Grow a thin pad oxide and deposit silicon nitride (the oxidation mask for local oxidation, LOCOS).

**2. Active-area definition — Mask 1 (active).** Pattern the nitride so that it remains only over the future active areas (transistors and other diffusions). With the same resist pattern still in place, perform the **channel-stop (field) implant** (p-type) into the exposed field regions; it raises the threshold of the parasitic field transistors and needs no extra mask. Grow the thick field oxide where the nitride is absent, then strip the nitride and pad oxide.

**3. Gate oxide and threshold adjust (no mask).** Grow the thin gate oxide. If a threshold-adjust implant is used, it is a **blanket** implant: every transistor is an NMOS device with the same target threshold, so nothing has to be protected.

**4. Gates — Mask 2 (poly).** Deposit polysilicon and pattern it into gates and poly interconnect lines.

**5. Source/drain implant (no mask).** Implant n+ dopants over the whole wafer. Wherever the implant reaches the silicon it forms the sources and drains; the poly gates block it over the channels and the thick field oxide blocks it over the field regions. The source/drain regions are therefore **self-aligned** to the gate and to the field oxide. The same implant dopes the polysilicon n+. Anneal to activate the dopants. (If LDD spacers or silicide are used, they too are self-aligned and need no masks.)

**Note on the substrate contact.** The p-type substrate is contacted through the back of the wafer. A front-side p+ substrate tie would need a mask to keep the blanket n+ implant out of it, plus a p+ implant, i.e. one more mask; the minimal process avoids it.

### Step 3 — Back end: two metal layers

**6. Contacts — Mask 3 (contact).** Deposit an interlayer dielectric (e.g. oxide) and open contact windows down to the n+ diffusions and the poly.

**7. First metal — Mask 4 (metal 1).** Deposit metal 1 and pattern it into wires.

**8. Vias — Mask 5 (via).** Deposit the inter-metal dielectric and open vias where metal 2 must reach metal 1.

**9. Second metal — Mask 6 (metal 2).** Deposit metal 2 and pattern it.

**10. Passivation — Mask 7 (pad openings).** Deposit a protective passivation layer (e.g. nitride or oxide) over the whole chip and open windows over the bonding pads.

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

Steps done **without** a mask: the channel-stop implant (shares mask 1), the threshold-adjust implant (blanket), the n+ source/drain implant (self-aligned to poly and field oxide), and spacer/silicide formation (self-aligned).

The minimum is therefore **6 masks** for the devices and the two metal levels, plus **1** for the pad openings: **7 in total** (6 if the passivation mask is not counted).

**Comparison with CMOS.** The same two-metal flow in CMOS adds an n-well mask and a source/drain select mask (the p+ implant is masked, and the n+ implant uses the same mask with the opposite polarity, or a second mask), i.e. at least 9 masks. Historical NMOS logic with depletion-mode load transistors also needed a depletion-implant mask (and often a buried-contact mask); a process with only one type of enhancement NMOS does not.

### Result

**Minimum: 6 patterning masks** (active, poly, contact, metal 1, via, metal 2), **plus 1 pad-opening (passivation) mask, i.e. 7 in total.** No n-well mask and no n+/p+ select mask are needed: the channel-stop implant shares the active mask, the threshold-adjust implant is blanket, and the n+ source/drain implant is unmasked because the sources and drains are self-aligned to the poly gates and the field oxide.

**Common mistake.** Including an n-well mask or other PMOS-related masks (giving 9 or more). Without PMOS transistors there is nothing to put in a well and nothing to separate between n+ and p+ implants.

**Common mistake.** Counting a separate mask for every implant. The channel-stop implant uses the active mask, the threshold adjust is blanket, and the source/drain implant is self-aligned; only steps that need a new pattern require a new mask.

**Common mistake.** Forgetting the contact or via masks (giving 5 or fewer). Each metal layer needs both its own wiring mask and a mask for the holes that connect it to the layer below.
