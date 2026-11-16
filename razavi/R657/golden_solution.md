# Golden Solution - R657

## Reference answer

The stabilizing zero would disappear, and the loop would be (marginally) unstable: it would oscillate instead of settling.
- The charge pump is a current source, so the current into $C_P$ is the same whether or not $R_P$ is in series. The voltage on $C_P$'s top plate is just the integral of the pump current, $V_{C_P}(s) = I_{CP}(s)/(C_Ps)$. Taken there, $V_{cont}/\Delta\phi = I_P/(2\pi C_Ps)$, and $R_P$ has no effect at all.
- The loop gain becomes $\dfrac{I_PK_{VCO}}{2\pi C_Ps^2}$: two ideal integrators, with −180° of phase at every frequency.
- The closed loop is $H(s) = \dfrac{I_PK_{VCO}/(2\pi C_P)}{s^2 + I_PK_{VCO}/(2\pi C_P)}$, with poles at $\pm j\sqrt{I_PK_{VCO}/(2\pi C_P)}$ (ζ = 0). The control voltage and the phase oscillate and never settle.
- At the charge-pump output node instead, $V_{cont} = I_{CP}R_P + \frac{1}{C_P}\int I_{CP}\,dt$. The $I_{CP}R_P$ term is a proportional (instantaneous) correction; it creates the zero at $-1/(R_PC_P)$, a damping $\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi} > 0$, and the phase margin. (The price is the $I_PR_P$ voltage jumps on that node, usually softened by a small capacitor in parallel with the branch.)

## Grading notes

+2: $R_P$ in series with a current source does not affect the capacitor voltage, so the zero disappears and only two integrators remain in the loop; hence ζ = 0, poles on the jω axis or no phase margin, and an unstable loop that oscillates. +1: "the zero is lost, so the loop becomes unstable" without explaining why $R_P$ has no effect, or the explanation of why $R_P$ has no effect with the stability consequence only implied. 0: only the statement that $R_P$ would be "bypassed", without the stability consequence. -2 (asserted as fact): a wrong main reason (e.g., the capacitor would be shorted, or the VCO input would load or discharge $C_P$); or a claim that the connection would work or be more stable. (Noting that the ripple jumps would disappear is correct and harmless.)
