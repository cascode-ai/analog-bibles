# Golden Solution - R441

## Reference answer

$\overline{V^2_{n,in}} \approx 4kT\gamma\left(\dfrac{1}{g_{m1}} + \dfrac{g_{mP2}}{g_{m1}^2}\right)$ (γ = 2/3); the cascode $M_2$, the auxiliary amplifier $M_3$ and its load $M_{P1}$ contribute negligibly at low frequencies.

- The circuit is a common-source stage $M_1$ with a regulated (gain-boosted) cascode $M_2$, where $M_3$ with load $I_1$ is the auxiliary amplifier; the output node sees the PMOS source $M_{P2}$.
- $M_1$: its noise current flows through $M_2$ to the output (the impedance looking into the source of $M_2$ is very low, ≈ $1/[g_{m2}(1 + A_3)]$), so it refers to the input as $4kT\gamma/g_{m1}$.
- $M_{P2}$: noise current $4kT\gamma g_{mP2}$ injected at the output; dividing by $g_{m1}^2$ gives $4kT\gamma g_{mP2}/g_{m1}^2$.
- $M_2$: as a heavily degenerated cascode (source impedance $r_{O1}$ boosted by the local loop), its noise current reaching the output is reduced by ≈ $1/[(1+A_3)g_{m2}r_{O1}]$: negligible.
- $M_3$ and $M_{P1}$: their noise produces a voltage at the gate of $M_2$; the loop suppresses its effect at X by $A_3 = g_{m3}(r_{O3}\|r_{OP1})$, and a voltage at X is further divided by $g_{m1}r_{O1}$ when referred to the input. For large $A_3$ their input-referred PSD is ≈ $4kT\gamma\,(1/g_{m3} + g_{mP1}/g_{m3}^2)/(g_{m1}r_{O1})^2$: negligible unless $g_{m3}$ is extremely small.

## Grading notes

+2: $4kT\gamma(1/g_{m1} + g_{mP2}/g_{m1}^2)$ with the other devices argued to be negligible (or their small terms written correctly). +1: correct dominant terms but no justification for neglecting $M_2$, $M_3$, $M_{P1}$. 0: one of the two dominant terms missing, or a factor-of-2 error (8kT for this single-ended stage). -2 (asserted as fact): $M_3$/$M_{P1}$ noise claimed to appear directly at the input with unity weight, the topology misread (e.g., $M_3$ taken as a diode or $M_2$'s gate as a fixed bias with the output noise of $M_2$ dominant), or $M_{P2}$ referred with $1/g_{mP2}$.
