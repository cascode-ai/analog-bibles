# Golden Solution - G075

## Reference answer

$I_{\text{TAIL}} \approx 206\ \mu$A; $k'(W/L_{\text{eff}}) \approx 4.86$ mA/V², i.e. $W/L_{\text{eff}} \approx 25$; with $L_{\text{eff}} = 0.82\ \mu$m, $W \approx 20.5\ \mu$m (L drawn = 1 µm).

- Large-signal: $\Delta I_d = I_{d1} - I_{d2} = \dfrac{k'}{2}\dfrac{W}{L}V_{id}\sqrt{\dfrac{4I_{\text{TAIL}}}{k'(W/L)} - V_{id}^2}$, maximum $I_{\text{TAIL}}$. With $u = k'(W/L)V_{id}^2/(4I_{\text{TAIL}})$: $\Delta I_d/I_{\text{TAIL}} = 2\sqrt{u(1-u)}$ (valid for $u \le 1/2$).
- $2\sqrt{u(1-u)} = 0.85$ → $u = (1 - \sqrt{1 - 0.7225})/2 = 0.2366$ → $k'(W/L)/I_{\text{TAIL}} = 4u/(0.2\ \mathrm{V})^2 = 23.66\ \mathrm{V^{-2}}$.
- Transconductance at balance: $d\Delta I_d/dV_{id} = \sqrt{k'(W/L)I_{\text{TAIL}}} = 1$ mA/V → $k'(W/L)I_{\text{TAIL}} = 10^{-6}\ \mathrm{A^2/V^2}$.
- Solving: $k'(W/L) = \sqrt{23.66 \times 10^{-6}} = 4.86$ mA/V², $I_{\text{TAIL}} = 4.86\ \mathrm{m}/23.66 = 205.6\ \mu$A.
- $W/L_{\text{eff}} = 4.86\ \mathrm{mA/V^2}/194\ \mu\mathrm{A/V^2} = 25.0$; $L_{\text{eff}} = 1 - 2(0.09) = 0.82\ \mu$m → $W = 20.5\ \mu$m.
- Check: at balance $V_{ov} = \sqrt{I_{\text{TAIL}}/(k'W/L)} = 0.206$ V, $g_m = 2(I_{\text{TAIL}}/2)/V_{ov} = 1.0$ mA/V; full switching at $\sqrt{2}V_{ov} = 0.29$ V > 0.2 V, and $\Delta I_d(0.2\ \mathrm{V}) = 0.85 I_{\text{TAIL}}$.

## Grading notes

+2: $I_{\text{TAIL}}$ 200–212 µA and $W$ 20–21 µm (or $W/L_{\text{eff}} \approx 25$ with $L_{\text{eff}} = 0.82$ µm) from correct use of the large-signal characteristic and $g_m = \sqrt{k'(W/L)I_{\text{TAIL}}}$; any design meeting both specifications with correct supporting calculations earns +2. +1: correct $I_{\text{TAIL}}$ and $W/L$ but $W = 25\ \mu$m from taking $L_{\text{eff}} = 1\ \mu$m, or one slip. 0: correct method with errors in both results, or only one specification satisfied. −2 (asserted as fact): the second specification treated with a small-signal (linear) relation (e.g. $g_m \times 0.2\ \mathrm{V} = 0.85 I_{\text{TAIL}}$, giving $I_{\text{TAIL}} \approx 235\ \mu$A), $g_m$ taken as $\sqrt{2k'(W/L)I_{\text{TAIL}}}$ for the pair, or the root $u > 1/2$ chosen.
