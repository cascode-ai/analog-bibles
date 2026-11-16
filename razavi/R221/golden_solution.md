# Golden Solution - R221

## Reference answer

Proof (small-signal, linear operation):
- Let $V_1$, $V_2$ be the control voltages (gate–source) of $D_1$, $D_2$ and $g_m$ their common transconductance (equal bias currents by symmetry). Then $\Delta I_1 = g_m\Delta V_1$, $\Delta I_2 = g_m\Delta V_2$, with $\Delta V_1 = \Delta V_{in1} - \Delta V_P$ and $\Delta V_2 = \Delta V_{in2} - \Delta V_P$.
- KCL at P with the resistor: $\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$.
- Substituting: $g_m(\Delta V_{in1} + \Delta V_{in2}) - 2g_m\Delta V_P = \Delta V_P/R_T$, i.e. $\Delta V_P\,(1/R_T + 2g_m) = g_m(\Delta V_{in1} + \Delta V_{in2})$.
- For differential inputs $\Delta V_{in1} + \Delta V_{in2} = 0$, so $\Delta V_P = 0$ (since $1/R_T + 2g_m \ne 0$). Consequently $\Delta V_1 = \Delta V_{in}$, $\Delta V_2 = -\Delta V_{in}$, and $\Delta I_1 = -\Delta I_2$.
- Equivalently: each half seen from P is a Thevenin source $\pm\Delta V_{in}$ behind $1/g_m$; equal resistances and opposite sources give zero at P, whatever is connected from P to ground (current source or $R_T$). The result requires symmetry and small signals (equal $g_m$); for a common-mode input $V_P$ would move by $\dfrac{2g_mR_T}{1 + 2g_mR_T}\Delta V_{CM}$.

## Grading notes

+2: a correct derivation (KCL at P with $\Delta V_P/R_T$, or a Thevenin/superposition argument) showing $\Delta V_P = 0$ for $\Delta V_{in1} = -\Delta V_{in2}$, with the linearity/symmetry assumption stated. +1: correct conclusion with a minor gap (e.g., not stating that the bias currents, hence $g_m$, are equal by symmetry). 0: a purely verbal symmetry argument without any equation. -2 (asserted as fact): claiming the lemma fails with a resistive tail, or a derivation with $\Delta I_1 + \Delta I_2 = 0$ imposed (treating $R_T$ as a current source) presented as the proof.
