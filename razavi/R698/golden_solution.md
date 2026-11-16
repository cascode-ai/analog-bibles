# Golden Solution - R698

## Reference answer

$R_S \approx R_{tot}/12 \approx 1.35\ \Omega$. Here $R_{tot} = 1/[\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})] \approx 16.2\ \Omega$ is the source-to-drain channel resistance. The cruder lumped estimate $R_{tot}/4 \approx 4.06\ \Omega$ overestimates the ESR by 3× but is also accepted.

- $M_1$ is a MOS capacitor (decoupling capacitor). Its gate is at $X$, whose dc level is $V_{DD} = 3$ V because the inductor drops no dc voltage. Source, drain and bulk are at ground. So $V_{GS} = 3$ V, $V_{SB} = 0$, $V_{TH} = 0.7$ V, $V_{DS} = 0$: strong inversion, deep triode.
- $R_{tot} = 1/[(134\ \mu\mathrm{A/V^2})(200)(2.3\ \mathrm{V})] = 16.2\ \Omega$.
- The channel is a uniformly distributed RC line contacted at both ends (source and drain grounded). Each half ($R_{tot}/2$, $C/2$) is a line open at the center, whose low-frequency series resistance is one third of its resistance, $(R_{tot}/2)/3$; the two halves act in parallel, so $R_S = R_{tot}/12 = 1.35\ \Omega$.
- The lumped estimate $(R_{tot}/2)\|(R_{tot}/2) = R_{tot}/4 = 4.06\ \Omega$ treats all the channel charge as entering at the center of the channel.
- For reference only (not required: $C_{ox}$ is not given in this problem; 3.84 fF/µm² is the value given in the follow-up problem R699), $C \approx WLC_{ox} = (50\ \mu\mathrm{m^2})(3.84\ \mathrm{fF/\mu m^2}) = 192$ fF, and the intrinsic time constant is $R_SC \approx L^2/[12\mu_n(V_{GS}-V_{TH})] \approx 0.26$ ps (0.78 ps with $R_{tot}/4$).

## Grading notes

+2: $R_S \approx 1.35\ \Omega$ (±5%) from the distributed-line result $R_{tot}/12$, or ≈ 4.06 Ω (±5%) from the lumped estimate $R_{tot}/4$, with $V_{GS} = V_{DD} = 3$ V, $V_{TH} = 0.7$ V and both channel ends grounded.
+1: correct model with a numerical slip (e.g., a wrong $W/L$ product) or a wrong overdrive from a minor misreading of the bias, with the rest right.
0: correct picture (MOS capacitor, channel resistance) but no number, or a hedged choice between $R_{tot}$ and $R_{tot}/4$.
-2 (asserted as fact): the ESR given as the full channel resistance $R_{tot} \approx 16.2\ \Omega$ (ignoring that both ends are grounded), $M_1$ treated as saturated (e.g., $1/g_m$), or a gate-voltage bias other than ≈ 3 V used without reason.
