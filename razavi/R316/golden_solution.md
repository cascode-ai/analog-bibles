# Golden Solution - R316

## Reference answer

Low-frequency gain (each half, and differentially) $g_{m1}KR_D = 2g_{m1}/g_{mD} \approx 1.41$.
Two poles: the mirror node X ≈ $2.1\times10^9$ rad/s (≈ 0.33 GHz), the output node ≈ $1.0\times10^{10}$ rad/s (≈ 1.6 GHz). An exact two-node solution (denominator $(g_{m3} + sC_X)(g_{mD} + sC_Y) + sC_{GD5}(g_{m5} - sC_{GD5})$ with $C_X = 129.9$ fF and $C_Y = 160.7$ fF, both including $C_{GD5}$) gives $2.09\times10^9$ rad/s (0.333 GHz) and $1.04\times10^{10}$ rad/s (1.66 GHz).
Zeros: right-half-plane zeros at ≈ $g_{m5}/C_{GD5} \approx 9.2\times10^{10}$ rad/s (≈ 15 GHz) and ≈ $g_{m1}/C_{GD1} \approx 5.8\times10^{10}$ rad/s (≈ 9 GHz), both far out.

Derivation (half circuit: $M_1$ → diode $M_3$ at node X → $M_5$ → output with $R_D$; tail node a virtual ground):
- Currents: 50 µA in $M_1$, $M_3$; 100 µA in $M_5$ and in the diode NFET.
- $g_{m1} = \sqrt{2(134\ \mu)(100)(50\ \mu)} = 1.16$ mS; $g_{m3} = \sqrt{2(38.4\ \mu)(20)(50\ \mu)} = 0.277$ mS ($1/g_{m3} = 3.6\ \mathrm{k\Omega}$); $g_{m5} = 0.554$ mS; $g_{mD} = \sqrt{2(134\ \mu)(100)(100\ \mu)} = 1.64$ mS, so $R_D = 1/g_{mD} = 611\ \Omega$; $g_{m5}R_D = 0.34$.
- Capacitances (fF): $C_{GS3} = 15.8$, $C_{DB3} = 14.2$; $C_{GS5} = 31.6$, $C_{GD5} = 6.0$, $C_{DB5} = 28.3$; $C_{GD1} = 20.0$, $C_{DB1} = 42.4$; diode NFET $C_{GS} = 84.0$, $C_{DB} = 42.4$ (its $C_{GD}$ is shorted).
- Node X: $R = 1/g_{m3}$, $C_X = C_{GS3} + C_{GS5} + C_{DB3} + C_{DB1} + C_{GD1} + (1 + g_{m5}R_D)C_{GD5} \approx 132$ fF ($C_{GD1}$ goes to the ideal input source, an ac ground); $\omega_X = g_{m3}/C_X \approx 2.1\times10^9$ rad/s.
- Output: $R = 1/g_{mD}$, $C_{out} = C_{DB5} + C_{GD5} + C_{GS,D} + C_{DB,D} \approx 161$ fF; $\omega_{out} \approx 1.0\times10^{10}$ rad/s.
- $\omega_X$ is the dominant ("mirror") pole because $1/g_{m3}$ is large; the low gain of $M_5$ (0.34) makes the Miller effect of $C_{GD5}$ small.

## Grading notes

+2: two poles associated with the mirror node ($g_{m3}/C_X$) and the output ($g_{mD}/C_{out}$) with values within ±25% of ≈ 0.33 GHz and ≈ 1.6 GHz, correct transconductances and $R_D = 1/g_{mD}$ ≈ 611 Ω, and at least the RHP zero due to $C_{GD5}$ (≈ 15 GHz) identified; the $C_{GD1}$ zero is a plus. +1: poles right but zeros missing, or one pole off by a missing capacitance group (e.g., junction capacitances omitted at one node). 0: only one pole right, or the method right with large numerical errors, or $C_{GD}$ computed with a non-saturation partition (e.g., $C_{GD} = \tfrac12C_{ox}WL + C_{ov}W$), which puts the zeros 3–4× too low. -2 (asserted as fact): an input pole claimed despite the ideal voltage-source drive, $R_D$ taken as $r_O$ of the NFET or as 1/λI, the mirror node resistance taken as $r_O$, or a left-half-plane zero from $C_{GD5}$.
