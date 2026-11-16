# Golden Solution - R285

## Reference answer

At the instant of the step the voltage across $C_F$ cannot change, because the only path that could supply charge to Y is $R_{out}$, which carries a finite current. So $V_Y - V_X$ keeps its initial value and Y is dragged up together with X: $\Delta V_Y(0^+) = +\Delta V$. Only afterwards does the amplifier act: the current $[V_Y - (-A\Delta V)]/R_{out}$ through $R_{out}$ charges $C_F$, and Y decays exponentially from $+\Delta V$ toward $-A\Delta V$ with time constant $R_{out}C_F$.
- Interpretation: $C_F$ is a feedforward path that couples the input directly to the output with a non-inverting gain of +1 at high frequencies, while the main path through the amplifier is inverting with gain $-A$. The two paths cancel at one (real, positive) complex frequency, which is a right-half-plane zero, $s_z = +A/(R_{out}C_F)$. The high-frequency gain (+1) has the opposite sign to the dc gain ($-A$), which is the signature of an RHP zero.
- With $R_{out} = 0$ the amplifier would supply the impulsive charging current and the output would step directly to $-A\Delta V$; the jump is a consequence of the finite $R_{out}$.

## Grading notes

+2: explains that the capacitor voltage (charge) cannot change instantaneously because the output is fed only through the finite $R_{out}$, so Y initially follows X by $+\Delta V$ (direct feedthrough via $C_F$), then decays toward $-A\Delta V$ with $\tau = R_{out}C_F$; links the opposite-sign feedforward path to a (right-half-plane) zero. +1: correct mechanism (capacitor coupling, finite $R_{out}$) but the zero or the subsequent decay is not discussed. 0: only says "the capacitor couples the input to the output" with no reason why the amplifier cannot prevent it. -2 (asserted as fact): claims the jump is $-A\Delta V$ or $(1+A)\Delta V$, attributes the jump to amplifier overshoot or ringing, or says the output first moves down.
