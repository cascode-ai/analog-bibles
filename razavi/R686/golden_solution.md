# Golden Solution - R686

## Reference answer

Minimum: 6 patterning masks for the devices and the two metal levels (active, poly, contact, metal 1, via, metal 2), plus 1 passivation (pad-opening) mask, so 7 in total (6 if the pad-opening mask is not counted). No n-well mask and no n+/p+ select mask are needed, and none of the implants needs a mask of its own.

Sequence (masked steps numbered):
1. p-type wafer, pad oxide and nitride. **Mask 1 (active):** expose the field regions, do the channel-stop (field) implant, grow the field oxide, then strip the nitride and oxide. The channel-stop implant uses the same mask.
2. Grow the gate oxide. The threshold-adjust implant is a blanket implant (every transistor is NMOS), so it needs no mask.
3. Deposit polysilicon. **Mask 2 (poly):** etch the gates and poly lines.
4. n+ source/drain implant with no mask: it is self-aligned to the poly gates and the field oxide, which block it elsewhere, and it also dopes the poly. Anneal. Spacers and silicide are self-aligned and need no mask. With no PMOS devices there is nothing to protect from the n+ implant. The substrate is contacted from the back side; a front-side p+ substrate tie would need a mask to block the blanket n+ implant (and a p+ implant), costing one more mask.
5. Deposit dielectric. **Mask 3 (contact windows).**
6. Deposit metal 1. **Mask 4 (metal 1).**
7. Deposit inter-metal dielectric. **Mask 5 (via).**
8. Deposit metal 2. **Mask 6 (metal 2).**
9. Passivation. **Mask 7 (pad openings).**

For comparison, the same two-metal flow in CMOS adds the n-well mask and the S/D (n+/p+) mask, for 9 masks.

## Grading notes

+2: a count of 7 (or 6, stated as excluding the pad-opening/passivation mask) with the correct list: active, poly, contact, metal 1, via, metal 2 (+ pad). The answer must recognize that no n-well mask is needed and that the n+ S/D implant can be done without a mask because the S/D regions are self-aligned to the gate and the field oxide (a threshold-adjust implant, if mentioned, is also blanket; not mentioning it is not an error). A short sequence sketch is expected. An answer that first lists a conventional flow with an n+ select mask but then states 6 (or 7 with pad openings) as the minimum, explaining why the n+ mask can be dropped, earns +2.
+1: 8, with one extra mask that is defensible but not strictly needed (e.g., an n+ select mask, or a p+ implant mask for front-side substrate ties) and the rest correct; or the right count with the step sequence missing or garbled.
0: a list with the right layers but a count off by a slip, or one needed mask missing with the rest sound.
-2 (asserted as fact): an n-well or other PMOS-related mask included (e.g., 9 or more for this NMOS-only flow), the via mask or contact mask omitted (5 or fewer), or a separate mask claimed for every implant, giving a clearly inflated minimum.
