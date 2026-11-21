# Detailed solution - G109

The offset is the gate–source voltage difference $V_{GS1}-V_{GS2}$ that balances the output at $V_{SUP}-|V_{GS3}|$. At that output the two load devices have equal $V_{DS}$, so the load mismatch sets the ratio of the drain currents forced on $M_1$ and $M_2$. Convert the load's current mismatch, together with the input pair's own $V_t$ and $W/L$ mismatches, into an input voltage using the square law. Then add the four contributions in the worst-case direction.

### Step 1 — Overdrives

Each side carries $I_D=50\ \mu\mathrm A$, with $(W/L)_N=10$ and $(W/L)_P=30$ on average. From the square law $V_{ov}=\sqrt{2I_D/(k'W/L)}$:

$$
V_{ovN}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(10)}}=0.227\ \mathrm V,\qquad
|V_{ovP}|=\sqrt{\frac{2(50\ \mu\mathrm A)}{(64.7\ \mu\mathrm{A/V^2})(30)}}=0.227\ \mathrm V .
$$

### Step 2 — Current mismatch produced by the load

$M_3$ and $M_4$ have the same $V_{SG}$ and equal $V_{DS}$. With $I_D=\tfrac{k'}2(W/L)(V_{SG}-|V_t|)^2$, differences ($\Delta x=x_3-x_4$) give

$$
\frac{I_{D3}-I_{D4}}{I_D}=\frac{\Delta(W/L)_P}{(W/L)_P}-\frac{2\Delta|V_{tP}|}{|V_{ovP}|} .
$$

$M_1$ must carry $I_{D3}$ (it feeds the diode) and $M_2$ carries $I_{D4}$, so this is the current mismatch $(I_{D1}-I_{D2})/I_D$ imposed on the input pair.

### Step 3 — Input-referred offset

$V_{GS}=V_t+V_{ov}$ with $V_{ov}\propto\sqrt{I_D/(W/L)}$, so for small differences ($\Delta x=x_1-x_2$),

$$
V_{OS}=V_{GS1}-V_{GS2}=\Delta V_{tN}+\frac{V_{ovN}}2\left(\frac{I_{D1}-I_{D2}}{I_D}-\frac{\Delta(W/L)_N}{(W/L)_N}\right).
$$

Substituting Step 2,

$$
V_{OS}=\Delta V_{tN}+\frac{V_{ovN}}{|V_{ovP}|}\left(-\Delta|V_{tP}|\right)+\frac{V_{ovN}}2\left(\frac{\Delta(W/L)_P}{(W/L)_P}-\frac{\Delta(W/L)_N}{(W/L)_N}\right).
$$

The load's threshold mismatch is referred to the input by $V_{ovN}/|V_{ovP}|$, and each $W/L$ mismatch is weighted by $V_{ovN}/2$.

### Step 4 — Worst case

All four mismatches take their worst-case magnitudes with signs that add:

| Source | Contribution |
|---|---|
| $\Delta V_{tN}$ | 10 mV |
| $\Delta\lvert V_{tP}\rvert\,V_{ovN}/\lvert V_{ovP}\rvert$ | $(10\ \mathrm{mV})(1.00)=10$ mV |
| $(V_{ovN}/2)\,\Delta(W/L)_P/(W/L)_P$ | $(113.5\ \mathrm{mV})(0.05)=5.7$ mV |
| $(V_{ovN}/2)\,\Delta(W/L)_N/(W/L)_N$ | $(113.5\ \mathrm{mV})(0.05)=5.7$ mV |

$$
|V_{OS}|=10\ \mathrm{mV}+10\ \mathrm{mV}+5.7\ \mathrm{mV}+5.7\ \mathrm{mV}=31\ \mathrm{mV}.
$$

The threshold mismatches contribute about two-thirds of the total. Unlike the bipolar case, there is no base-current term, but the offset is several times larger because $V_t$ mismatch enters directly and the $W/L$ terms are scaled by $V_{ov}/2\approx114$ mV instead of $V_T=26$ mV.
