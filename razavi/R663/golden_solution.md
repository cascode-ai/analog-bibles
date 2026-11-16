# Golden Solution - R663

## Reference answer

In frequency-detection mode, the loop compares frequencies rather than phases. The VCO's frequency-to-phase integration, $K_{VCO}/s$, which supplies one of the two poles at the origin in phase-lock mode, is therefore not part of the loop. Only the loop-filter capacitor's integration remains, so the order drops by one (second to first order).

- When the frequencies differ, the phase difference sweeps continuously, and one PFD output pulses almost all the time. The average charge-pump current is set by the sign and size of the frequency difference $\omega_{in} - \omega_{out}$, not by any phase: from about $I_P/2$ (input slightly faster than the VCO) up to about $I_P$ (input much faster), with the opposite sign for a slower input.
- The quantity fed back and compared is therefore the VCO frequency itself. That is a static function of the control voltage, $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$: the VCO acts as a plain gain (V → ω), not as an integrator (V → φ).
- In phase-lock mode the loop has two integrators, $(I_P/2\pi)(R_P + 1/C_Ps)\cdot K_{VCO}/s$, i.e., a second-order closed loop. In frequency-detection mode only the capacitor $C_P$ integrates.
- With a linearized detector gain $K_{FD}$ (current per rad/s), the loop gain is $L = K_{FD}K_{VCO}(R_P + 1/C_Ps)$, and $\dfrac{\omega_{out}}{\omega_{in}} = \dfrac{K(1 + R_PC_Ps)}{K + (1 + KR_P)C_Ps}$ with $K = K_{FD}K_{VCO}$: a single pole, so the frequency approaches $\omega_{in}$ in a first-order (monotonic, unconditionally stable) manner.
- With a nearly constant pump current, $V_{cont}$ and $\omega_{out}$ simply ramp toward lock; that motion is again described by one state variable, the charge on $C_P$.

## Grading notes

+2: in frequency-detection mode the PFD/charge-pump output depends on the frequency difference, not on phase. The loop variable is therefore frequency, and the VCO acts as a static gain $K_{VCO}$ (V → ω) instead of the integrator $K_{VCO}/s$ (V → φ). Removing that pole at the origin lowers the order by one, leaving only the filter capacitor's integration (first-order frequency acquisition). +1: the key idea (the VCO's 1/s is absent from the loop when frequencies are compared) without saying which integrator remains or why. 0: a vague answer ("the loop is nonlinear during acquisition") that does not identify the missing integrator. -2 (asserted as fact): the lower order attributed to the loop filter (e.g., the resistor or capacitor being effectively disconnected) or to the charge pump being idle; or a claim that the order increases.
