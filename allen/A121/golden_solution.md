# Golden Solution - A121

## Reference answer

$A_v \approx -171$ V/V at 0.1 µA, −70.3 V/V at 5 µA, −15.7 V/V at 100 µA.

- $A_v = -g_{m1}/(g_{ds1} + g_{ds2})$, with $g_{ds1} + g_{ds2} = (\lambda_P + \lambda_N)I_D = 0.09\,I_D$ in both regions (from the $(1+\lambda v_{DS})$ factor).
- Strong inversion, $g_{m1} = \sqrt{2K'_P(W_1/L_1)I_D}$ (M1 is the p-channel device): at 5 µA $g_{m1} = 31.6\ \mu$S, $g_{ds} = 0.45\ \mu$S, $A_v = -70.3$. At 100 µA $g_{m1} = 141.4\ \mu$S, $g_{ds} = 9\ \mu$S, $A_v = -15.7$. Here $|A_v| \propto 1/\sqrt{I_D}$.
- Weak inversion: $g_{m1} = I_D/(n_p\,kT/q) = 0.1\ \mu/(2.5 \cdot 0.026) = 1.54\ \mu$S and $g_{ds} = 9$ nS, so $A_v = -1/[n_p (kT/q)(\lambda_P + \lambda_N)] = -171$, independent of current. The strong-inversion formula would wrongly give ≈ −497 at 0.1 µA.

## Grading notes

+2: all three within ±3 % (−171, −70.3, −15.7), using the p-channel parameters for the input device and $n_p = 2.5$ in weak inversion. Using kT/q = 25.9 mV (−172) is fine. +1: two values right and one off by a slip. 0: the strong-inversion values right but the weak-inversion gain wrong (e.g. the square-law formula used at 0.1 µA giving ≈ −497). −2 (asserted as fact): n-channel parameters used for M1 (e.g. −104 at 5 µA) or $n_n$ used for the input device (−285), $g_{ds}$ taken as zero in weak inversion (infinite gain), or the gain claimed to increase with current.
