# Golden Solution - A487

## Reference answer

One valid implementation: one switched-capacitor gain stage per bit, all built from the same cell, with successive stages clocked on opposite phases.

Cell for bit $i$ (op amp, inverting input = summing node, non-inverting input grounded):
- Feedback capacitor $C_F = C$ with a reset switch across it, closed during the cell's sampling phase.
- Reference capacitor $C_R = C$ (ratio $C_R/C_F = 1$) realizing $b_iV_{REF}$: if $b_i = 1$ its left plate is at $V_{REF}$ during the sampling phase and at ground during the transfer phase; if $b_i = 0$ the left-plate connections are interchanged (ground during sampling, $V_{REF}$ during transfer), which produces $-V_{REF}$. (Alternatively switch the left plate between $+V_{REF}$ and $-V_{REF}$.)
- Inter-stage capacitor $C_P = C/2$ (ratio $C_P/C_F = 1/2$) realizing the factor ½: left plate connected to the previous stage's output during the sampling phase and to ground during the transfer phase.
- Right plates of $C_R$ and $C_P$: to ground during the sampling phase, to the op amp summing node during the transfer phase (parasitic-insensitive, non-inverting charge transfer).
- Result at the end of the transfer phase: $v_i = \frac{C_R}{C_F}b_iV_{REF} + \frac{C_P}{C_F}v_{i+1} = b_iV_{REF} + \frac12 v_{i+1}$, held until the cell's next sampling phase.
- Phasing: cell $N-1$ (LSB) samples on $\phi_1$ and transfers on $\phi_2$; cell $N-2$ samples on $\phi_2$ (while cell $N-1$ holds its output) and transfers on $\phi_1$; and so on, alternating. Each cell adds half a clock period of delay, so the $z^{-1}$ of each stage of the block diagram corresponds to one half-period; the bits of a word are applied to successive cells staggered by the same half-period, a new word can enter every clock period, and the first cell has no $C_P$ (its ½-input is 0). The output is taken from cell 0 during its transfer phase (or through a final sample-and-hold).
- If inverting (standard) charge transfer is used instead, each stage inverts; this is compensated by inverting the sense of $b_i$ in alternate stages.

## Grading notes

+2: a switched-capacitor stage per bit realizing $v_i = b_iV_{REF} + \frac12 v_{i+1}$ with correct ratios (reference capacitor = feedback capacitor, inter-stage capacitor = half the feedback capacitor), a way of producing $\pm V_{REF}$, feedback-capacitor reset (or an equivalent that prevents accumulation), and consistent nonoverlapping phasing such that each stage samples the previous output while it is valid (alternating phases or an explicit S/H per stage), with signs handled. Any other correct SC realization is acceptable. +1: correct cell and ratios with phasing incomplete or sign inversion overlooked. 0: block-level description only, or correct phasing with a ratio error in one capacitor. −2 (asserted as fact): integrators without reset (accumulating outputs), ratio ½ applied to the reference instead of the previous output, or all stages sampling and transferring on the same phases so that a stage reads an output being reset.
