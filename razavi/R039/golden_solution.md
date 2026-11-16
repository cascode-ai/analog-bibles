# Golden Solution - R039

## Reference answer

Proof (saturated device, small-signal model with $C_{GS}$, $C_{GD}$, and junction capacitances; $C_{GB}$ neglected in saturation):
- Drive the gate with a small-signal current $I_{in}$ and short source and drain (and bulk) to ac ground. $C_{SB}$ and $C_{DB}$ then connect ac-grounded nodes and carry no signal current, which is why the junction capacitances do not enter $f_T$.
- All of $I_{in}$ flows into $C_{GS}$ and $C_{GD}$ in parallel: $V_{gs} = I_{in}/[j\omega(C_{GS} + C_{GD})]$.
- Output (drain) current: $I_{out} = g_mV_{gs}$ (neglecting the feedforward current $j\omega C_{GD}V_{gs}$ through $C_{GD}$, which is small compared with $g_mV_{gs}$ for $C_{GD} \ll C_{GS}$).
- Current gain $|I_{out}/I_{in}| = g_m/[\omega(C_{GS} + C_{GD})]$, equal to 1 at $\omega_T = g_m/(C_{GS} + C_{GD})$, so $f_T = g_m/[2\pi(C_{GS} + C_{GD})]$.

## Grading notes

+2: current drive at the gate with source and drain at ac ground, $V_{gs} = I_{in}/[j\omega(C_{GS}+C_{GD})]$, $I_{out} = g_mV_{gs}$, unity-gain condition giving the formula; noting why junction capacitances drop out (and that the $C_{GD}$ feedforward is neglected) is a plus. Writing $I_{out} = g_mV_{gs}$ without remarking that the $C_{GD}$ feedforward current is neglected is the standard textbook step and does not cost a point. +1: correct derivation with a loose step (e.g., no justification for ignoring $C_{SB}$/$C_{DB}$). 0: result restated with only a partial argument. -2 (asserted as fact): a different final expression (e.g., including $C_{DB}$ or $C_{SB}$, or only $C_{GS}$ claimed as exact), or a voltage-gain argument presented as the proof.
