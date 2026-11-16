# Detailed solution - R649

**Approach.** Track the phase of each waveform. The reference advances at $2\pi f_H$ rad/s. Lowering the VCO frequency to $f_L$ makes the VCO fall further behind, at a rate of $2\pi(f_H - f_L)$ rad/s. Rising edges coincide whenever the total lag is a whole number of cycles. Starting from a lag $\phi_0$, the first such moment comes when the lag has grown to $2\pi$, i.e. after an extra $2\pi - \phi_0$ of slip.

### Step 1 — Phases before $t_1$

Edges of a periodic waveform occur when its phase passes a multiple of $2\pi$. Define the phases of the two waveforms:

$$\phi_{CK}(t) = 2\pi f_Ht, \qquad \phi_{VCO}(t) = 2\pi f_Ht - \phi_0 \quad (t < t_1).$$

Both run at $f_H$, and the VCO lags by the constant phase $\phi_0$ (a time skew $\Delta t = \phi_0/(2\pi f_H)$), as in the figure.

### Step 2 — Phases after the frequency is lowered at $t_1$

At $t_1$, $V_{cont}$ is stepped *down*, so the VCO frequency drops to $f_L < f_H$. The phase of an oscillator is continuous (only its rate changes), so for $t_1 \le t \le t_2$:

$$\phi_{VCO}(t) = 2\pi f_Ht_1 - \phi_0 + 2\pi f_L(t - t_1).$$

The phase lag of the VCO behind the reference is

$$
\begin{aligned}
\phi_{CK}(t) - \phi_{VCO}(t) &= 2\pi f_Ht - 2\pi f_Ht_1 + \phi_0 - 2\pi f_L(t - t_1)\\
&= \phi_0 + 2\pi(f_H - f_L)(t - t_1).
\end{aligned}
$$

The lag **grows** linearly from $\phi_0$ at the rate $2\pi(f_H - f_L)$ rad/s. A slower VCO cannot catch up with the reference; it can only fall further behind.

### Step 3 — Condition for alignment

The rising edges of the two waveforms coincide when the lag is an integer multiple of $2\pi$: the VCO edge then lines up with a reference edge, $k$ cycles later than the one it originally followed. The lag starts at $\phi_0$ (between 0 and $2\pi$) and increases, so the first alignment occurs when it reaches $2\pi$:

$$\phi_0 + 2\pi(f_H - f_L)(t_2 - t_1) = 2\pi .$$

Solve for the interval:

$$
\begin{aligned}
2\pi(f_H - f_L)(t_2 - t_1) &= 2\pi - \phi_0,\\
t_2 - t_1 &= \frac{2\pi - \phi_0}{2\pi(f_H - f_L)} = \frac{1 - \phi_0/2\pi}{f_H - f_L}.
\end{aligned}
$$

At $t_2$, $V_{cont}$ returns to its original value, the VCO is back at $f_H$, and the lag stays at exactly $2\pi$: the waveforms remain aligned. Longer intervals $t_2 - t_1 = (2\pi k - \phi_0)/[2\pi(f_H - f_L)]$, with $k = 2, 3, \dots$, also work, but $k = 1$ is the minimum.

**Equivalent forms.**

- **Counting cycles.** Over the interval the reference completes $f_H(t_2 - t_1)$ cycles and the VCO $f_L(t_2 - t_1)$. The VCO must complete exactly $1 - \phi_0/2\pi$ fewer cycles: $(f_H - f_L)(t_2 - t_1) = 1 - \phi_0/2\pi$, which is the same result.
- **In terms of the time skew** $\Delta t = \phi_0/(2\pi f_H)$: $t_2 - t_1 = (1/f_H - \Delta t)\,f_H/(f_H - f_L)$.

**Comparison with the figure.** Raising the frequency, as in the original figure, needs only $\phi_0$ of phase gain. Lowering it needs $2\pi - \phi_0$ of phase loss. For a small initial lag, lowering the frequency takes much longer.

### Step 4 — The redrawn waveforms

- **$V_{CK}$:** unchanged, period $1/f_H$.
- **$V_{cont}$:** steps **down** at $t_1$, stays low until $t_2$, then returns to its original level.
- **$V_{out}$ ($V_{VCO}$):** before $t_1$, the same period as $V_{CK}$, with each rising edge a fixed skew after the corresponding $V_{CK}$ edge. Between $t_1$ and $t_2$ the period is longer, $1/f_L$, so each successive rising edge falls further behind its $V_{CK}$ edge. At $t_2$ a rising edge of $V_{out}$ lands exactly on a rising edge of $V_{CK}$, one reference cycle later than the edge it was originally following. After $t_2$ the periods are equal again and the edges stay aligned.

**Example (normalised).** Take $f_H = 1$ (reference period 1), $f_L = 0.8$ (VCO period 1.25 between $t_1$ and $t_2$), $\phi_0 = \pi/2$ (a lag of 0.25 period), and suppose $t_1$ coincides with the VCO edge at $t = 2.25$. The formula gives

$$t_2 - t_1 = \frac{1 - 0.25}{1 - 0.8} = 3.75, \qquad t_2 = 6.0 .$$

| VCO rising edge at | Nearest earlier $V_{CK}$ edge | Lag (in periods) |
|---|---|---|
| 2.25 ($t_1$) | 2 | 0.25 |
| 3.50 | 3 | 0.50 |
| 4.75 | 4 | 0.75 |
| 6.00 ($t_2$) | 6 (coincident) | 1.00 → aligned |

After $t = 6$ the VCO edges fall at 7, 8, 9, …, exactly on the reference edges. Over the interval the reference completes 3.75 cycles and the VCO 3.0, i.e. $0.75 = 1 - \phi_0/2\pi$ fewer.

### Result

With the VCO frequency lowered from $f_H$ to $f_L$, the VCO's lag grows from $\phi_0$ at the rate $2\pi(f_H - f_L)$. The edges first realign when the lag reaches one full cycle ($2\pi$), so the minimum interval is

$$t_2 - t_1 = \frac{2\pi - \phi_0}{2\pi(f_H - f_L)} = \frac{1 - \phi_0/2\pi}{f_H - f_L}.$$

In the redrawn waveforms, $V_{cont}$ steps down between $t_1$ and $t_2$, and $V_{out}$ has a longer period in that interval, so its edges drift later until, at $t_2$, they coincide with the next $V_{CK}$ edges; afterwards the two remain aligned.

**Common mistake.** Writing $t_2 - t_1 = \phi_0/[2\pi(f_H - f_L)]$, as if lowering the frequency removed the lag directly. A slower VCO falls *further* behind; it can only realign by losing the remaining $2\pi - \phi_0$ to reach the next reference edge.

**Common mistake.** Claiming that phase alignment is impossible when the frequency is lowered. Phase is defined modulo $2\pi$: a lag of exactly one cycle is perfect edge alignment.

**Common mistake.** Drawing a *shorter* VCO period between $t_1$ and $t_2$, or mixing up hertz and radians (dropping the $2\pi$ in the denominator while keeping $\phi_0$ in radians). Lowering $V_{cont}$ lowers the frequency, so the period lengthens, and phase in radians must be divided by an angular frequency difference, $2\pi(f_H - f_L)$.
