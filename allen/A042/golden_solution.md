# Golden Solution - A042

## Reference answer

The side must be at least ≈ 200 µm (200.1 µm), i.e. each capacitor ≈ 200 µm × 200 µm ≈ 4×10⁴ µm² (about 40 pF at 1 fF/µm²).

- $C = C_{area}(d \pm 0.05\ \mu\mathrm{m})^2$. Worst case: one capacitor at $d + 0.05$, the other at $d - 0.05$.
- Requirement: $\left(\dfrac{d + 0.05}{d - 0.05}\right)^2 \le 1.001$ ⇒ $\dfrac{d + 0.05}{d - 0.05} \le \sqrt{1.001} = 1.0005$ ⇒ $d \ge \dfrac{0.05(1 + 1.0005)}{0.0005} = 200.1\ \mu$m.
- Small-error form: mismatch $\approx 2\cdot2(0.05)/d = 0.2/d \le 0.001$ ⇒ $d \ge 200\ \mu$m. (If only one capacitor varied, or the 0.1% were required of each capacitor's absolute value, $2\delta/d \le 0.001$ would give $d \ge 100\ \mu$m.)

## Grading notes

+2: side ≈ 200 µm (195–205 µm) from the worst-case opposite deviations of the two capacitors (area ≈ 4×10⁴ µm²). +1: 100 µm with a clearly stated assumption that each capacitor alone must stay within 0.1% (or that only one varies), or 200 µm with a muddled derivation. 0: correct expression for C but no final size, or a final size off by a slip. −2 (asserted as fact): sizes of a few µm to tens of µm (e.g. 50 µm from δ/d = 0.001), or a claim that matching is independent of size.
