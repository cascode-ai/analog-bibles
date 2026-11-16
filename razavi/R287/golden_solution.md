# Golden Solution - R287

## Reference answer

The output jumps up by $\Delta V\,\dfrac{C_F}{C_F + C_L}$, then decays toward $-A\Delta V$ with $\tau = R_{out}(C_F + C_L)$; the jump reveals a (right-half-plane) zero at $+A/(R_{out}C_F)$.
- At $t = 0^+$ the finite $R_{out}$ cannot deliver the impulsive current needed to change capacitor voltages, so the step at X is coupled to Y only through $C_F$, which forms a capacitive divider with $C_L$: the same charge $\Delta Q$ flows through $C_F$ into $C_L$, $C_F(\Delta V - \Delta V_Y) = C_L\Delta V_Y$, giving $\Delta V_Y = \Delta V\,C_F/(C_F + C_L)$.
- Then the amplifier's current through $R_{out}$ charges both capacitors and pulls Y down to $-A\Delta V$.
- The direct, non-inverting feedforward through $C_F$ against the inverting main path means a right-half-plane zero, still at $A/(R_{out}C_F)$ (it does not depend on $C_L$); $C_L$ only reduces the jump and slows the decay.

## Grading notes

+2: jump $= \Delta V\,C_F/(C_F + C_L)$ explained by the capacitive divider at $t = 0^+$ (finite $R_{out}$ cannot change capacitor charges instantaneously), subsequent decay toward $-A\Delta V$, and the link to a (right-half-plane) zero. +1: correct mechanism and jump value but the zero not mentioned, or the zero right but the decay time constant wrong. 0: mechanism right but the jump stated as $\Delta V$ (divider ignored). -2 (asserted as fact): output claimed to go down immediately, jump $\Delta V\,C_L/(C_F + C_L)$ or $(1+A)\Delta V$, or the jump attributed to amplifier ringing.
