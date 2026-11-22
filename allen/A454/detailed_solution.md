# Detailed solution - A454

With a fixed matching accuracy, the errors of the binary-weighted capacitors grow with their size. Find the worst-case DNL and INL in LSB as functions of $N$, and take the largest $N$ for which both stay within ±0.5 LSB.

### Step 1 — Error model

The output magnitude is $|v_{OUT}|=(V_{REF}/C_X)\sum b_iC_i$ with $C_i=2^{N-1-i}C$, $C_X=2^NC$ and $1\,\mathrm{LSB}=V_{REF}/2^N$. Let each capacitor deviate from its nominal value, relative to $C_X$, by at most $\varepsilon=\Delta C/C=0.002$. A capacitor of nominal size $2^{k}C$ then contributes an output error of up to $2^{k}\varepsilon$ LSB.

### Step 2 — Worst-case DNL

At the MSB transition $0111\ldots1\to1000\ldots0$, the MSB capacitor ($2^{N-1}C$) turns on and all the others ($(2^{N-1}-1)C$ in total) turn off. With their errors in opposite directions, the step deviates from 1 LSB by

$$
|\mathrm{DNL}|_{\max}=\left[2^{N-1}+\left(2^{N-1}-1\right)\right]\varepsilon=(2^N-1)\,\varepsilon\ \ \mathrm{LSB}.
$$

### Step 3 — Worst-case INL

At full scale all $N$ capacitors are on. If every one is high (or low) by $\varepsilon$ relative to $C_X$, their errors add:

$$
|\mathrm{INL}|_{\max}=\left(2^{N-1}+2^{N-2}+\cdots+1\right)\varepsilon=(2^N-1)\,\varepsilon\ \ \mathrm{LSB},
$$

the same limit as the DNL.

### Step 4 — Maximum $N$

Requiring $(2^N-1)\varepsilon\le0.5$ with $\varepsilon=0.002$, i.e. $2^N\le251$:

| $N$ | $(2^N-1)\times0.002$ |
|---|---|
| 7 | $127\times0.002=0.254$ LSB |
| 8 | $255\times0.002=0.51$ LSB |

$N=8$ fails by a small margin, so the maximum resolution for ideal operation is $N=7$. Considering only the MSB capacitor's own INL contribution, $2^{N-1}\varepsilon\le0.5$, would wrongly allow $N=8$ (0.256 LSB), because it ignores the combined error of all bits at the MSB transition.
