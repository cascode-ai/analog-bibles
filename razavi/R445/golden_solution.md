# Golden Solution - R445

## Reference answer

$(W/L)_{7} = (W/L)_8 \approx 50$, i.e. W ≈ 25 μm with L = 0.5 μm (≈ 47 if the $V_{DS}^2/2$ term is dropped).

- $M_7$ and $M_8$ are in parallel between P and ground, with gates at $V_{out1}$ and $V_{out2}$. They carry $I_{D5} + I_{D6} = 1$ mA total, 0.5 mA each when matched and $V_{out1} = V_{out2} = 1.5$ V.
- Triode with $V_{GS} = 1.5$ V, $V_{DS} = V_P = 0.1$ V (source grounded, no body effect): $0.5\ \mathrm{mA} = 134\ \mu\mathrm{A/V^2}\cdot(W/L)[(1.5 - 0.7)(0.1) - 0.1^2/2] = 134\ \mu \cdot (W/L) \cdot 0.075$ → $W/L = 49.8$.
- Deep-triode approximation ($R_{on7}\|R_{on8} = V_P/(2I_D) = 100\ \Omega$ with $R_{on} = 1/[\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})]$) gives $W/L = 46.6$.

## Grading notes

+2: $W/L$ ≈ 47–51 each (W ≈ 23–26 μm), from the triode equation with $V_{GS} = 1.5$ V, $V_{DS} = 0.1$ V, and 0.5 mA per device (1 mA total through P). Equivalent statement as a combined W/L ≈ 93–100 for the parallel pair is also +2. +1: right method with a small slip. 0: correct triode setup but the current per device taken as 1 mA (W/L ≈ 100 each) or 0.25 mA. -2 (asserted as fact): $M_7$/$M_8$ treated as saturated, their gate–source voltage taken as anything other than the 1.5-V output CM level (their sources are grounded), or the result off by a formula error.
