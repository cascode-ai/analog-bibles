A fully differential op amp with CMFB is shown in [Fig. 1]: NMOS input pair $M_1$–$M_2$ with NMOS cascodes $M_{1C}$–$M_{2C}$, PMOS current-source loads $M_3$–$M_4$, tail transistors $M_{51}$ (mirrored from $M_{14}$) and $M_{52}$ (mirrored from $M_{25}$). The cascode gate bias comes from diode-connected $M_{13}$, fed by $M_{12}$ and returned to the tail node. CMFB uses two PMOS differential pairs $M_{21}$–$M_{24}$ with tails $M_{26}$, $M_{27}$ and gates at $V_{o2}$, $V_{CM}$, $V_{CM}$, $V_{o1}$, whose $V_{CM}$-side currents flow through diode-connected $M_{25}$. $I_{DC} = 100\ \mu$A; $V_{DD} = 1.65$ V, $-V_{SS} = -1.65$ V. Sizes: $M_1$, $M_{1C}$, $M_2$, $M_{2C}$: $W/L = 64\ \mu\text{m}/0.8\ \mu\text{m}$; $M_3$, $M_4$, $M_{26}$, $M_{27}$ and $M_{11}$: $96\ \mu\text{m}/1.4\ \mu\text{m}$; $M_{21}$–$M_{24}$: $6\ \mu\text{m}/0.8\ \mu\text{m}$; $M_{14}$, $M_{25}$ and $M_{52}$: $16\ \mu\text{m}/0.8\ \mu\text{m}$; $M_{13}$: $1.4\ \mu\text{m}/0.8\ \mu\text{m}$. Take $V_{CM} = -0.65$ V. For hand estimates and for the simulation models, use (treating the given dimensions as effective): $\mu_nC_{ox} = 194\ \mu\text{A/V}^2$, $\mu_pC_{ox} = 64.7\ \mu\text{A/V}^2$, $V_{tn} = 0.6$ V, $V_{tp} = -0.8$ V, $dX_d/dV_{DS} = 0.02\ \mu$m/V (NMOS) and 0.04 μm/V (PMOS), i.e. $\lambda = (dX_d/dV_{DS})/L$.

(a) Choose W values for $M_{12}$ and $M_{51}$ so that $|I_{D13}| = 20\ \mu$A. Use $L = 0.8\ \mu$m for $M_{51}$ and $L = 1.4\ \mu$m for $M_{12}$.

(b) Use SPICE to find the low-frequency op-amp gains $v_{od}/v_{id}$, $v_{oc}/v_{ic}$, $v_{od}/v_{ic}$ and $v_{oc}/v_{id}$ with the CMFB active.

(c) Calculate the output slew rate $dV_{od}/dt$ if a 4-pF capacitor is connected from each op-amp output to ground.

(d) What is the differential output voltage swing of this op amp? Assume $V_{ic} = V_{CM}$, and ignore body effect for this calculation.

(e) Repeat (b) when the input transistors are mismatched with $W_1 = 63\ \mu$m and $W_2 = 65\ \mu$m. (Note: With mismatch, the op-amp offset voltage is not zero.)

(f) Repeat (b) when the load transistors are mismatched with $W_3 = 95\ \mu$m and $W_4 = 97\ \mu$m.
