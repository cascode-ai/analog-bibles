# Golden Solution - R699

## Reference answer

$L_{b,max} = R_S^2C/4 \approx 0.088$ pH. This uses $C = WLC_{ox} = 192$ fF and the channel ESR of $M_1$ from the distributed-channel result, $R_S \approx R_{tot}/12 \approx 1.35\ \Omega$ ($R_{tot} = 16.2\ \Omega$). The cruder lumped estimate $R_S \approx R_{tot}/4 \approx 4.06\ \Omega$ gives ≈ 0.79 pH. Either way the result is orders of magnitude below a realistic bond-wire or package inductance (~1 nH), so a single 100/0.5 device cannot critically damp the supply node.

- $M_1$ as a capacitor: gate at $X$ (dc 3 V), channel to ground, so $V_{GS} - V_{TH} = 2.3$ V and $C = (100)(0.5)\ \mu\mathrm{m^2} \times 3.84\ \mathrm{fF/\mu m^2} = 192$ fF. The channel resistance is $R_{tot} = 1/[\mu_nC_{ox}(W/L)(2.3)] = 16.2\ \Omega$. The channel is a distributed RC line fed from both ends, so $R_S = R_{tot}/12 = 1.35\ \Omega$ (each half, $R_{tot}/2$ with $C/2$, contributes a third of its resistance, and the two halves are in parallel); lumping each half's resistance in full gives $R_{tot}/4 = 4.06\ \Omega$.
- Node $X$ connects to $V_{DD}$ (ac ground) through $L_b$, to ground through $R_S$ in series with $C$, and to the current source $I_{DD}$:
  $\dfrac{V_X}{I_{DD}}(s) = -\dfrac{sL_b(1 + sR_SC)}{s^2L_bC + sR_SC + 1}$.
- From the characteristic polynomial $s^2L_bC + sR_SC + 1$, the damping factor is $\zeta = \dfrac{R_S}{2}\sqrt{C/L_b}$. Critical damping, $\zeta = 1$, gives $L_b = R_S^2C/4$. A larger $L_b$ gives an underdamped (ringing) response, so this is the maximum.
- Numbers: $(1.35\ \Omega)^2(192\ \mathrm{fF})/4 = 8.8\times10^{-14}$ H ≈ 0.088 pH; with $R_{tot}/4$, $(4.06\ \Omega)^2(192\ \mathrm{fF})/4 = 7.9\times10^{-13}$ H ≈ 0.79 pH.
- Model scope: this is the intended lumped model (constant low-frequency ESR in series with C, overlap and other parasitics neglected). At the resulting $\omega_0 = 1/\sqrt{L_bC}$, $\omega_0R_{tot}C \approx 24$, so the low-frequency ESR is no longer accurate there; with the full distributed channel admittance $Y = sC\tanh z/z$, $z = \sqrt{sR_{tot}C}/2$, the characteristic equation $1 + s^2L_bC\tanh z/z = 0$ has no double negative real root for any finite $L_b$, so no exact critical value exists. The lumped number is the expected answer; the conclusion that one such device cannot damp a realistic bond wire holds either way.

## Grading notes

+2: $L_{b,max} = R_S^2C/4$ with $C \approx WLC_{ox} = 192$ fF and $R_S$ from the MOS-capacitor channel resistance: ≈ 0.088 pH (±10%) with $R_S = R_{tot}/12$, or 0.79 pH (±10%) with $R_S = R_{tot}/4$. (The overlap capacitance is not given and goes directly to the grounded S/D, in parallel with the R–C branch, so it is not expected; adding it to $C$ with the same $R_S$ is a minor imprecision, not a critical error.) A correct full distributed-channel analysis showing that no exact critical point exists, together with the lumped estimate, also earns +2.
+1: correct condition and method with a numerical slip, or the correct symbolic result $R_S^2C/4$ with a minor error in $C$.
0: correct damping condition but $R_S$ taken as the full channel resistance (16.2 Ω, giving ≈ 12.6 pH), or a correct ESR with the damping condition left unevaluated. (The companion ESR question, 18.10(a), scores the full-channel value −2 because there the ESR is the whole answer; here the damping condition is the main point.)
-2 (asserted as fact): a wrong damping condition (e.g., $L_b = 4R_S^2C$ or $R_S^2C$ from a parallel-RLC formula), the capacitor treated as lossless (no damping possible) while a value is still given, or $M_1$'s capacitance off by orders of magnitude.
