# Golden Solution - R718

## Reference answer

$M$ ≈ 1.85 nH.

- Image theory: the ground plane replaces each wire's return path by an image at depth h below the plane. The mutual inductance per unit length is $M' = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + (2h)^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right]$, with $\mu_0/4\pi = 0.1$ nH/mm.
- $M' = 0.1\ln(1 + 10^2) = 0.1 \times 4.615 = 0.4615$ nH/mm.
- $M = 0.4615 \times 4 = 1.85$ nH.

## Grading notes

+2: 1.85 nH (±5%), from the two-wire-above-ground formula $0.1\ln[1 + (2h/d)^2]$ nH/mm or its approximation $0.2\ln(2h/d)$ nH/mm (1.84 nH). +1: correct formula with a small arithmetic slip. 0: a finite-length (Neumann-type) calculation (≈ 0.9 nH) despite the instruction to neglect end effects, or correct per-length value without multiplying by the length. -2 (asserted as fact): ground plane ignored with a free-space formula presented as the answer, h and d interchanged (e.g., $0.1\ln[1 + (d/2h)^2]$ giving ≈ 0.004 nH), or a self-inductance formula used for the mutual inductance.
