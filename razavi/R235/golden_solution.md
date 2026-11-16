# Golden Solution - R235

## Reference answer

About 0.9% (≈ 2.7 μA out of 0.3 mA); $I_{out}$ is higher than $I_{REF}$ if $V_b$ is raised and lower if it is lowered.

- $V_{GS3}$ is set by the (nearly unchanged) current, so $V_Y = V_b - V_{GS3}$ moves by the full ±100 mV while $V_X = V_{GS1} = 0.937$ V stays fixed.
- $\frac{I_{out}}{I_{REF}} = \frac{1+\lambda V_{DS2}}{1+\lambda V_{DS1}} = \frac{1 + 0.1(0.937 \pm 0.1)}{1+0.1(0.937)}$ → $\pm\frac{0.01}{1.094} = \pm 0.91\%$, i.e., ±2.7 μA (≈ λΔV = 1% to first order).

## Grading notes

+2: mismatch ≈ 0.9–1.0% (≈ 2.7–3 μA), from $\Delta V_{DS2} \approx \pm 100$ mV and the $(1+\lambda V_{DS})$ ratio. +1: correct mechanism with a factor error within ±30%, or only the percentage without the absolute value. 0: correct mechanism but $\Delta V_Y$ taken much smaller than 100 mV without justification. -2 (asserted as fact): mismatch computed as if $V_{GS}$ of $M_2$ changed by 100 mV (tens of percent), a claim of zero mismatch because the cascode shields $M_2$, or λ applied with the wrong device (PMOS λ).
