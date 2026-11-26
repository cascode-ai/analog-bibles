# Golden Solution - R047

## Reference answer

The PMOS is diode-connected: its gate and drain are both at ground, and its source is the output terminal itself. It is always saturated ($V_{SD} = V_{SG}$), but its gate–source voltage equals the output voltage, so $I_1 = \tfrac12\mu_pC_{ox}(W/L)(V_{out} - |V_{TH}|)^2$ changes strongly (quadratically) with the voltage applied at the terminal. The small-signal impedance is only $1/g_m \parallel r_O \approx 1/g_m$ (lower still with body effect, $1/(g_m + g_{mb})$, if the bulk is at $V_{DD}$). A current source needs $V_{GS}$ fixed independently of the output voltage, with the output taken at the drain.

## Grading notes

+2: identifies the diode connection (gate tied to drain at ground, output at the source), so $V_{SG}$ follows the output voltage and the current depends strongly (quadratically) on it; either the quadratic $I_1(V_{out})$ or the low impedance ≈ $1/g_m$ suffices, since the impedance is just $dV_{out}/dI_1$ of that law. +1: correct reason ($V_{SG}$ follows the terminal voltage) stated only qualitatively, with neither the current expression nor the impedance. 0: vague statement that "the output is not at the drain" without explaining the consequence. -2 (asserted as fact): claims it is a good current source, attributes the failure to triode operation, or misreads the device as an NMOS with fixed gate bias.
