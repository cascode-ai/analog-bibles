# Golden Solution - G081

## Reference answer

$V_{ov} = 0.2$ V, $L_{\text{eff}} = 2.0$ µm ($L_{\text{drwn}} = 2.18$ µm), $W/L_{\text{eff}} \approx 12.9$, $W \approx 25.7$ µm. Gate area ≈ 56 µm² per device (W × L_drwn), ≈ 112 µm² in total (≈ 103 µm² if W × L_eff is used).

- (i) $M_2$ stays saturated down to $V_{DS2} = V_{ov}$, so $V_{ov} \le 0.2$ V.
- (iii) $\Delta I_{OUT}/I_{OUT} \approx \lambda\,\Delta V_{OUT} = \lambda\,(1\ \mathrm{V}) \le 0.01$, i.e. $r_o = 1/(\lambda I_D) \ge 2$ MΩ, so $\lambda \le 0.01\ \mathrm{V^{-1}}$ and $L_{\text{eff}} \ge 0.02/0.01 = 2$ µm.
- (ii) $W/L_{\text{eff}} = 2I_D/(k'V_{ov}^2)$; the gate area is $W L = (W/L)L^2 \propto L^2/V_{ov}^2$, so it is minimized by the largest allowed overdrive and the shortest allowed length: $V_{ov} = 0.2$ V, $L_{\text{eff}} = 2$ µm.
- $W/L_{\text{eff}} = 2(50\ \mu\mathrm{A})/(194\ \mu\mathrm{A/V^2}\times0.04\ \mathrm{V^2}) = 12.9$, $W = 25.7$ µm, $L_{\text{drwn}} = 2 + 2(0.09) = 2.18$ µm.
- Check: $r_o = 1/(0.01 \times 50\ \mu\mathrm{A}) = 2$ MΩ, a 1-V change gives 0.5 µA = 1 % (slightly less with the $1+\lambda V_{DS}$ factor), $V_{GS} = 0.8$ V.

## Grading notes

This is a design problem: accept any design that meets all three constraints with minimum area and correct supporting calculations. +2: $V_{ov} = 0.2$ V, $L_{\text{eff}} \approx 2$ µm (drawn ≈ 2.18 µm), $W \approx 25$–26.5 µm, an argument that the area is minimized at maximum $V_{ov}$ and minimum $L$, and the area (≈ 112 µm² drawn or ≈ 103 µm² effective, either). +1: correct design but the lateral diffusion ignored (drawn $L$ = 2 µm used as effective length, which slightly violates (iii)), or a small slip in $W$. 0: a valid but non-minimal design (e.g. smaller overdrive or longer $L$), or only some of the dimensions derived. -2 (asserted as fact): constraint (iii) translated wrongly (e.g. $L$ = 0.2 µm or $\lambda = 0.1\ \mathrm{V^{-1}}$), the factor 2 missing in the square law, the overdrive confused with $V_{GS}$ ($V_{GS} \le 0.2$ V), or area claimed to decrease with longer $L$.
