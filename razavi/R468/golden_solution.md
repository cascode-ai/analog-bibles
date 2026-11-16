# Golden Solution - R468

## Reference answer

1. Nodes X and Y (first-stage outputs): $\omega_X \approx \dfrac{1}{(r_{O1}\|r_{O3})\,C_X}$, with $C_X \approx C_{GS5} + C_{GS10} + C_{DB1} + C_{GD1} + C_{DB3} + C_{GD3} + (1 + A_2)C_{GD5} + C_{GD10}(1 + g_{m10}/g_{m12})$, where $A_2 = (g_{m5}+Kg_{m9})(r_{O5}\|r_{O7})$ (Miller multiplication of $C_{GD5}$). Usually low, because $r_{O1}\|r_{O3}$ is large.
2. Output nodes: $\omega_{out} \approx \dfrac{1}{(r_{O5}\|r_{O7})(C_L + C_{DB5} + C_{GD5} + C_{DB7} + C_{GD7})}$.
3. Mirror nodes (gates of $M_{11}$/$M_7$ and $M_{12}$/$M_8$): $\omega_m \approx \dfrac{g_{m11}}{C_{GS11} + C_{GS7} + C_{DB11} + C_{DB9} + C_{GD9} + C_{GD7}(1 + \dots)}$, typically at a high frequency since the node impedance is only ≈ $1/g_{m11}$.

- The mirror pole affects only the $M_9$–$M_{11}$–$M_7$ path, so it is accompanied by a zero (≈ $2\omega_m$ when the two paths contribute equally), as in a differential pair with an active current mirror.
- Without compensation, $\omega_X$ and $\omega_{out}$ are close to each other and both relatively low, so the op amp needs frequency compensation (e.g., Miller capacitors across $M_5$/$M_6$) before use in feedback.

## Grading notes

+2: identifies the three nodes (X/Y, outputs, mirror gate nodes of $M_{11}$/$M_{12}$) with resistances $r_{O1}\|r_{O3}$, $r_{O5}\|r_{O7}$, and ≈ $1/g_{m11}$, and reasonable capacitance lists (Miller effect of $C_{GD5}$ at X is a plus). +1: correct three nodes and resistances with incomplete capacitance lists, or the mirror-path zero not mentioned while poles are right. 0: two of the three poles right. -2 (asserted as fact): a pole assigned to a low-impedance node with a high resistance (e.g., the mirror node with $r_O$), the drains of $M_9$/$M_{10}$ treated as high-impedance nodes, or the node at the sources of $M_1$/$M_2$ given as a major pole for differential signals. Because $M_1$/$M_2$ are matched, swapping them at X/Y (e.g., writing $r_{O2}\|r_{O3}$ for node X) changes no pole: treat it as a minor labelling slip (at most +1), not as a misread topology.
