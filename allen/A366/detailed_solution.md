# Detailed solution - A366

The circuit produces a current only on the side of the crossing where the sink current exceeds what M2 can source: M2 then saturates at its mirrored current and the diode-connected M3 supplies the difference. In the original circuit the sink is $K_1I_{PTAT}$, which grows with temperature, so the correction appears on the high-temperature side. To correct the low-temperature side, the sink must be the current that grows as temperature falls, $I_{VBE}$, and M2 must source the PTAT current. Interchanging the two currents does exactly this.

### Step 1 — How the original circuit works

M2 sources at most $K_2I_{VBE}$ (when saturated), and the sink draws $K_1I_{PTAT}$ from its drain.

- Below the crossing, $K_2I_{VBE}>K_1I_{PTAT}$: M2 could supply more than the sink draws, so its drain rises toward $V_{DD}$, M2 enters the active region and carries only $K_1I_{PTAT}$, and M3 has $V_{SG3}\approx0$ and is off: $I_{NL}=0$.
- Above the crossing, $K_1I_{PTAT}>K_2I_{VBE}$: M2 saturates at $K_2I_{VBE}$, the drain node falls until M3 conducts, and M3 supplies the difference by KCL at the drain of M2:

$$
I_{NL}=K_1I_{PTAT}-K_2I_{VBE}\quad(T>T_{cross}).
$$

### Step 2 — Modified circuit for the low-temperature side

Drive M1 with $I_{PTAT}$, so that M2 sources at most $K_2'I_{PTAT}$, and connect a sink $K_1'I_{VBE}$ to the drain of M2; keep the mirror M3–M4.

<!-- diagram: diagram-01.cir -->

The same reasoning now gives:

- above the crossing, $K_2'I_{PTAT}>K_1'I_{VBE}$: M2 is in the active region, its drain is near $V_{DD}$, M3 is off and $I_{NL1}=0$;
- below the crossing, $K_1'I_{VBE}>K_2'I_{PTAT}$: M2 saturates and M3 supplies

$$
I_{NL1}=K_1'I_{VBE}-K_2'I_{PTAT}\quad(T<T_{cross}'),
$$

which grows as the temperature falls, because $I_{VBE}$ rises and $I_{PTAT}$ falls. M4 delivers $K_3'I_{NL1}$.

### Step 3 — Combining the two corrections

The uncorrected reference current $I_{VBE}+K_1I_{PTAT}$ droops at both ends of the temperature range (its curvature is concave down). Use both circuits and add both correction currents to it with the same polarity:

$$
I_{REF}=I_{VBE}+K_1I_{PTAT}+K_3I_{NL}+K_3'I_{NL1}.
$$

$K_3I_{NL}$ lifts the high-temperature end and $K_3'I_{NL1}$ lifts the low-temperature end. The constants $K_1',K_2'$ set the second crossing temperature $T_{cross}'$ and $K_3'$ the slope of the low-temperature correction; they are chosen together with $K_1,K_2,K_3$ to minimize the temperature coefficient over the whole range.
