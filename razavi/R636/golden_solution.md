# Golden Solution - R636

## Reference answer

$\dfrac{V_{out}}{I_{in}} = L_Ps \parallel R_P \parallel \dfrac{1}{C_Ps} = \dfrac{R_PL_Ps}{R_PL_PC_Ps^2 + L_Ps + R_P}$: just the tank impedance. It is finite at every $s = j\omega$ (maximum $R_P$ at $\omega = 1/\sqrt{L_PC_P}$) and its poles are in the left half plane, so the closed-loop gain never becomes infinite and the circuit does not oscillate (the same conclusion as with a voltage stimulus at the gate or a current stimulus at the source).

Derivation:
- Node X (source of $M_1$) connects only to $M_1$, $C_2$ and the ideal $I_b$ (open for ac). KCL at X: $-g_mV_X + (V_{out} - V_X)C_2s = 0$ → $V_X/V_{out} = C_2s/(g_m + C_2s)$.
- The current leaving the output node through $C_2$, $(V_{out} - V_X)C_2s = g_mV_X$, is returned exactly by $M_1$, whose drain-to-source current is $g_m(0 - V_X) = -g_mV_X$. So $M_1$ and $C_2$ together draw zero net current from the output node, and all of $I_{in}$ flows into the tank.

## Grading notes

+2: $V_{out}/I_{in}$ equal to the tank impedance ($L_Ps \parallel R_P \parallel 1/C_Ps$), the conclusion that it stays finite on the jω axis so the circuit cannot oscillate, and the reason (the $M_1$ and $C_2$ currents cancel because node X has no other ac path). +1: correct result and conclusion with incomplete justification. 0: correct method and conclusion with an algebra slip giving a slightly different but still finite transfer function. -2 (asserted as fact): a claim that the circuit oscillates, a transfer function with poles on the jω axis or in the right half plane, or a nonexistent $C_1$ from X to ground added to the analysis.
