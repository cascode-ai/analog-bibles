# Golden Solution - R558

## Reference answer

In phase 2, $V_{out} = V_{EB}(I_1 + I_2) + \dfrac{C_2}{C_1}V_T\ln\left(1 + \dfrac{I_2}{I_1}\right)$. Choose
$\dfrac{C_2}{C_1}\dfrac{k}{q}\ln\left(1 + \dfrac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K}$, i.e. $\dfrac{C_2}{C_1}\ln\left(1 + \dfrac{I_2}{I_1}\right) \approx 17.4$ ($k/q = 86.17\ \mu$V/K).
Example: $I_2 = 7I_1$ ($\ln 8 = 2.08$) and $C_2 \approx 8.4C_1$; then $V_{out} \approx V_{EB} + 17.4V_T \approx V_{EB} + 0.45$ V ≈ 1.2 V.
- The ratio $I_2/I_1$ must be temperature-independent (both currents derived from the same reference through a mirror), so that the second term is exactly PTAT. Capacitor ratios are accurate and nearly temperature-independent.
- The absolute currents only set the operating point of $V_{EB}$ (PTAT currents make its TC slightly less negative, so the exact ratio is fine-tuned).
- Equivalent form: $V_{out} = V_{EB}(I_1) + (1 + C_2/C_1)V_T\ln(1 + I_2/I_1)$, with the condition written relative to $V_{EB}(I_1)$.

## Grading notes

+2: condition $(C_2/C_1)\ln(1 + I_2/I_1) \approx 17.4$ (or $(C_2/C_1)(k/q)\ln(1 + I_2/I_1) = -\partial V_{EB}/\partial T$; the equivalent form with $1 + C_2/C_1$ relative to $V_{EB}(I_1)$ also counts), plus the requirement that $I_2/I_1$ be temperature-independent. +1: correct condition but the ratio requirement on the currents not mentioned. 0: only a qualitative statement that the PTAT term must cancel the $V_{EB}$ TC. -2 (asserted as fact): a condition that makes $V_{out}$ CTAT or doubly PTAT (wrong sign or the capacitor ratio inverted), $\Delta V_{EB}$ taken as $V_T\ln(I_2/I_1)$ instead of $V_T\ln(1 + I_2/I_1)$ ($I_2$ read as replacing $I_1$ rather than adding to it), or the claim that the absolute values of $I_1$, $I_2$ set the PTAT term.
