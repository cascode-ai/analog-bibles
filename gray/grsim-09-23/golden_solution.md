# Golden Solution - grsim-09-23

## Reference answer

$(W/L)_{9,\text{eff}} = (W/L)_{6,\text{eff}} = 100/6.4 = 15.6$; with $L_9$ = 8 μm drawn ($L_{\text{eff}}$ = 7.4 μm in triode) $W_9 ≈ 116$ μm (≈ 116/8); $R_Z = 1/g_{m6} ≈ 5.1$ kΩ.

- Zero at infinity: $R_Z = 1/g_{m6}$, $g_{m6} = \sqrt{2 \times 60.4 \times 15.6 \times 20}$ μA/V = 194 μA/V, $V_{ov6} = 0.206$ V.
- Bias circuit: $M_{10}$ mirrors 20 μA into $M_{11}$, $M_{12}$ (100/8 each). $M_{12}$ matches $M_6$ (same size and current), so $V_{GS12} = V_{GS6}$ and the sources of $M_{11}$ and $M_9$ sit at the same voltage; with equal $V_{SB}$ the thresholds are equal and $V_{GS9} - V_t = V_{ov11} = V_{ov6}$.
- $R_Z = 1/[k'_n(W/L)_9V_{ov11}] = 1/[k'_n(W/L)_6V_{ov6}]$ → $(W/L)_{9,\text{eff}} = (W/L)_{6,\text{eff}} = 15.6$; drawn $W_9 = 15.6 \times 7.4 ≈ 116$ μm for $L$ = 8 μm (100/8 if $X_d$ is also subtracted for $M_9$).
- Expected simulation: the operating-point resistance of $M_9$ ($1/g_{ds}$) ≈ 5.1 kΩ and $1/g_{m6}$ ≈ 5.1 kΩ agree within a few percent (λ makes $V_{GS6}$ and $V_{GS12}$ differ slightly); the open-loop response then shows no right-half-plane-zero flattening of the gain, with the phase margin set by the remaining parasitic poles.

## Grading notes

Hand result: $(W/L)_9$ equal to the effective $W/L$ of $M_6$ (15.6), i.e. ≈ 116/8 drawn (or 100/8 with $X_d$ subtracted), with the replica-bias argument. A correct simulation reports $M_9$'s small-signal resistance within ≈ 10% of $1/g_{m6}$ (≈ 5 kΩ) and an open-loop gain/phase without the zero-induced flattening (compare with $M_9$ shorted: the zero appears near $g_{m6}/(2\pi C_c)$ ≈ 6 MHz).
