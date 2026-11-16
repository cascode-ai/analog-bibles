# Golden Solution - G155

## Reference answer

The output is still a staircase of one step per clock period, but slightly smaller: the first step is ≈ 0.1998 V instead of 0.2 V, and later steps shrink by a factor ≈ 0.9998 each. At 20 μs the output is ≈ 3.988 V instead of 4.0 V (about −0.3 %, i.e. ≈ 12 mV low). The integrator has become slightly lossy, with a dc gain limited to $a$.

- With finite gain the summing node sits at $-V_o/a$ instead of 0. Charge conservation from the end of $\phi_1$ to the end of $\phi_2$:
  $-C_SV_s + C_I\left(-\tfrac{V_o[n]}{a} - V_o[n]\right) = C_S\left(-\tfrac{V_o[n+1]}{a}\right) + C_I\left(-\tfrac{V_o[n+1]}{a} - V_o[n+1]\right)$
- Hence $V_o[n+1] = \alpha V_o[n] + \beta V_s$ with $\alpha = \dfrac{C_I(1+1/a)}{C_I(1+1/a) + C_S/a} = 0.99980$ and $\beta = \dfrac{C_S}{C_I(1+1/a) + C_S/a} = 0.19976$.
- $V_o[n] = \beta V_s(1-\alpha^n)/(1-\alpha)$: $V_o[1] = 0.1998$ V, $V_o[20] = 3.988$ V. The final value if the clock kept running would be $\beta V_s/(1-\alpha) = aV_s = 1000$ V (it would saturate first). So the integrator is "leaky", with a pole slightly inside the unit circle. Over 20 cycles the effect is a gain error of about $(1 + C_S/C_I)/a \approx 0.1\%$ per step, growing slowly.
- During $\phi_1$ the output simply holds (the summing node is isolated), so the waveform shape is unchanged apart from the slightly smaller steps.

## Grading notes

+2: staircase retained, steps slightly smaller (≈ 0.1 % initially, decreasing gradually) and the 20-μs value ≈ 3.99 V (3.98–3.995 V accepted), with a charge-conservation argument including the $-V_o/a$ summing-node voltage; mention of the leaky (finite dc gain) behaviour is a plus. +1: correct qualitative conclusion (≈ 0.1–0.3 % smaller, essentially the same waveform) with an approximate error estimate such as $(1 + C_S/C_I)/a$ but no 20-μs value, or a small numerical slip. 0: says "the error is negligible" with only a vague justification. -2 (asserted as fact): output changes drastically (saturates, decays to zero, or steps of a different order), error claimed to be 1/1000 of the output per step accumulated to a large error (e.g. 3.6 V), or the finite gain said to change the sign of the steps.
