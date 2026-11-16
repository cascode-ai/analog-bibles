(Design task with a self-computed score.) The operational transconductance amplifier (OTA) shown in [Fig. 1] is powered from ±2.5 V power supplies (node 4 at +2.5 V, node 5 at −2.5 V; noninverting input $v_1$ at node 1, inverting input $v_2$ at node 2; output node 3 loaded by 10 pF). You are to perform a design of an OTA using only MOSFETs to best meet the following specifications, using the model parameters below. Let all channel lengths be 1 µm and keep the values of W between 1 µm and 100 µm.

1. Differential voltage gain: $A_{vd} \ge 80$ dB.
2. Output voltage swing range: OVSR = $|V_o(\max)| + |V_o(\min)| \ge 4.5$ V. The OVSR is determined by the maximum and minimum output voltages for which 50 µA can be sourced or sunk into a load.
3. Slew rate: SR ≥ 10 V/µs into 10 pF.
4. Differential input resistance: $R_{id} \ge 1$ MΩ.
5. Input common-mode range: ICMR ≥ 3 V. The ICMR is measured by sweeping the input common-mode voltage (with the OTA connected as a unity-gain buffer) and monitoring both the output voltage and the input-stage current.
6. Common-mode rejection ratio: CMRR ≥ 60 dB.
7. Gain bandwidth: GB ≥ 25 MHz with a 10-pF load capacitance.
8. Phase margin: $\phi(GB) \ge 60°$ with a 10-pF load capacitance.
9. Power dissipation: $P_{diss} \le 1$ mW.

When you have completed your design and have made hand calculations to support your performance expectations, use SPICE to verify your design. Use the simplest models possible, although you must include all capacitances. Use the following approximations to estimate the size of the drain/source areas and perimeters: AD = AS = W × 10 µm, PD = PS = 2W + 20 µm.

Report a table with the rows "Hand values" and "SPICE values" and the columns $A_{vd}$, OVSR, SR, $R_{id}$, ICMR, CMRR, GB, $\phi(GB)$, $P_{diss}$. The score of the design is

Score = min[5, 5($A_{vd}$/10⁴)] + min[5, 5(OVSR/4.5 V)] + min[5, 5(SR/(10 V/µs))] + min[5, 5($R_{id}$/1 MΩ)] + min[5, 5(ICMR/3 V)] + min[5, 5(CMRR/10³)] + min[5, 5(GB/25 MHz)] + min[5, 5($\phi(GB)$/60°)] + min[5, 5(1 mW/$P_{diss}$)] + min[5, Simplicity factor],

where the simplicity factor is based on your ability to keep the design straightforward and simple (1 = complex design, 5 = simple design). You are responsible for verifying your score via the correct SPICE analysis; evaluate your own score, providing sufficient detail to verify your assessment.

Model parameters (simple model, L = 1 µm): $K'_N = 110\ \mu\mathrm{A/V^2}$, $K'_P = 50\ \mu\mathrm{A/V^2}$, $V_{T0} = 0.7$ V (n), −0.7 V (p), $\gamma_N = 0.4\ \mathrm{V^{1/2}}$, $\gamma_P = 0.57\ \mathrm{V^{1/2}}$, $\lambda_N = 0.04\ \mathrm{V^{-1}}$, $\lambda_P = 0.05\ \mathrm{V^{-1}}$, $2|\phi_F| = 0.7$ V (n), 0.8 V (p). For SPICE use a LEVEL-1 model with these values (KP = $K'$, VTO, GAMMA, LAMBDA, PHI) and CGSO = CGDO = 220 × 10⁻¹² F/m, CGBO = 700 × 10⁻¹² F/m, CJ = 770 × 10⁻⁶ F/m² (n) / 560 × 10⁻⁶ F/m² (p), CJSW = 380 × 10⁻¹² F/m (n) / 350 × 10⁻¹² F/m (p), MJ = 0.5, MJSW = 0.38 (n) / 0.35 (p), TOX = 140 Å ($C_{ox}$ = 2.47 fF/µm²).
