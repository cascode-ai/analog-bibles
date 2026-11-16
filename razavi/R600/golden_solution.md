# Golden Solution - R600

## Reference answer

Only a second harmonic is produced: $\mathrm{THD} = \dfrac{|\alpha_2|\,x_{max}}{4(\alpha_1 + \alpha_2x_{max})} \approx \dfrac{|\alpha_2|\,x_{max}}{4\alpha_1}$ (ratio of harmonic to fundamental amplitude; as a power ratio, the square of this).
- Write $x = A + A\cos\omega t$ with $A = x_{max}/2$. Then $y = \alpha_1A + \alpha_1A\cos\omega t + \alpha_2A^2(1 + 2\cos\omega t + \cos^2\omega t)$.
- DC: $\alpha_1A + \tfrac32\alpha_2A^2$; fundamental: $A(\alpha_1 + 2\alpha_2A) = \tfrac{x_{max}}{2}(\alpha_1 + \alpha_2x_{max})$ (the DC offset of the input adds $2\alpha_2A^2$ to it); second harmonic: $\alpha_2A^2/2 = \alpha_2x_{max}^2/8$; no higher harmonics.
- Ratio: $\dfrac{\alpha_2x_{max}^2/8}{(x_{max}/2)(\alpha_1+\alpha_2x_{max})} = \dfrac{\alpha_2x_{max}}{4(\alpha_1+\alpha_2x_{max})}$. (It equals the end-point nonlinearity of the same characteristic over $[0, x_{max}]$.)

## Grading notes

+2: THD $= |\alpha_2|x_{max}/[4(\alpha_1+\alpha_2x_{max})]$ with the fundamental including the $2\alpha_2A^2$ cross term, or the same quantity squared when explicitly given as a power ratio; only a second harmonic. +1: fundamental taken as $\alpha_1x_{max}/2$ only, giving $\alpha_2x_{max}/(4\alpha_1)$ without stating it is an approximation. 0: right method with a factor-of-2 slip in the harmonic or fundamental amplitude. -2 (asserted as fact): third or higher harmonics claimed, the amplitude taken as $x_{max}$ instead of $x_{max}/2$ in a way that changes the result (e.g., THD $= \alpha_2x_{max}/(2\alpha_1)$), or the DC term counted as distortion.
