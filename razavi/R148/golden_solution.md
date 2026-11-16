# Golden Solution - R148

## Reference answer

There is no unique number; a reasonable enumeration gives roughly 10 or more distinct single-stage topologies. Representative list (output normally at the joined drains):
1. NMOS CS ($M_1$ input) with PMOS current-source load ($M_2$ gate at a bias).
2. NMOS CS with diode-connected PMOS load.
3. NMOS CS with PMOS triode load ($M_2$ gate at ground).
4–6. PMOS CS ($M_2$ input) with NMOS current-source, diode-connected or triode load.
7. Complementary CS / CMOS inverter amplifier: both gates driven by the input, $A_v = -(g_{m1}+g_{m2})(r_{O1}\|r_{O2})$.
8. NMOS common gate: input at the bottom terminal (source of $M_1$), $M_1$ gate biased, $M_2$ as current-source or diode load.
9. PMOS common gate: input at the top terminal (source of $M_2$), $M_2$ gate biased, $M_1$ as load.
10. With source/drain swaps, source followers (e.g., $M_1$ with its drain at $V_{DD}$ and source at the middle output, $M_2$ with its source at the middle node, drain at ground and gate at a bias as the load; since its $V_{SG}$ follows the output, this load is ≈ $1/g_{m2}$ rather than a constant current sink, and the gain is ≈ $g_{m1}/(g_{m1} + g_{m2})$ with the bulks tied to the sources) and the PMOS counterpart.
11. Bulk-driven variants of the above.
12. Folded cascode: $M_1$ common source (source at ground, drain at the middle node), $M_2$ swapped so that its source is at the middle node, gate at a bias, output at its outer terminal; the middle node must be fed by a bias current source and the output needs a load (non-transistor elements). The PMOS-input mirror image ($M_2$ CS, $M_1$ swapped as the cascode device, a bias current sink at the middle node) works likewise. With only the two transistors and voltage sources (no resistors or bias current sources), the one-device-swapped arrangements (folded cascode, degenerated CS) cannot be biased, because both device currents leave (or enter) the middle node; they need the extra non-transistor bias element.

## Grading notes

Open-ended: grade the list, not the count. Load variants of the same stage (current-source, diode-connected, triode) may be listed separately or grouped as one topology. +2: at least six valid, distinct topologies (or grouped families) with correct input/output nodes and device roles, covering common source with the other device as load (either polarity), the complementary CS with both gates driven, and a common-gate stage. +1: four or five valid topologies, or six or more with one or two arrangements that need an unstated non-transistor bias element (e.g., a folded cascode without the bias current at the middle node, a follower whose output at an outer terminal needs an external load). 0: two or three valid topologies. -1: only a number with no list. An answer that explicitly restricts itself to voltage-source biasing only and correctly concludes that the folded-cascode / one-device-swapped arrangements then cannot be biased is not penalized for omitting them; the folded cascode is not required for +2. -2 (asserted as fact): several configurations that cannot work even with added non-transistor bias elements presented as valid (e.g., a PMOS whose source is the most negative node of the circuit used as a conducting load, output taken at an isolated gate or bulk, an input at the joined drains with the output at a source).
