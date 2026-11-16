# Golden Solution - G109

## Reference answer

$|V_{OS}| \approx 31$ mV.

- Each side carries 50 µA. $V_{ovN} = \sqrt{2(50\ \mu)/(194\ \mu\times10)} = 0.227$ V, $|V_{ovP}| = \sqrt{2(50\ \mu)/(64.7\ \mu\times30)} = 0.227$ V.
- With the output at $V_{SUP} - |V_{GS3}|$, $V_{DS3} = V_{DS4}$ and $V_{DS1} = V_{DS2}$, and
  $V_{OS} \approx \Delta V_{t(1-2)} + \dfrac{V_{ovN}}{2}\left(\dfrac{\Delta V_{t(3-4)}}{|V_{ovP}|/2} + \dfrac{\Delta(W/L)_P}{(W/L)_P} - \dfrac{\Delta(W/L)_N}{(W/L)_N}\right)$.
- Worst case (magnitudes added): $10\ \mathrm{mV} + 0.1135\ \mathrm{V}\times(0.0881 + 0.05 + 0.05) = 10 + 10 + 11.4 \approx 31$ mV.

## Grading notes

+2: 30–33 mV with the load threshold mismatch scaled by $V_{ovN}/|V_{ovP}|$ (here 1) and the W/L terms weighted by $V_{ovN}/2$. +1: correct structure with a small slip (e.g. 28–35 mV). 0: one of the four contributions omitted. -2 (asserted as fact): W/L mismatch weighted by $V_{ov}$ instead of $V_{ov}/2$ (≈ 53 mV), mismatch terms claimed to cancel, or the load threshold mismatch added unscaled together with other formula errors leading to a clearly different value (e.g. > 45 mV or < 20 mV).
