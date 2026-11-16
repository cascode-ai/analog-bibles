# Detailed solution - R615

**Approach.** Insert the gate-voltage-dependent mobility into the square law, use $(1 + \epsilon)^{-1} \approx 1 - \epsilon$ to turn the drain current into a quadratic plus a small cubic term in the overdrive, substitute the sinusoidal overdrive, and pick out the $\cos3\omega t$ component. The output $V_{DD} - R_DI_D$ has $R_D$ times the current's third harmonic.

### Step 1 — Drain current with mobility degradation

Let $V = V_{GS} - V_{TH}$ be the instantaneous overdrive and $k_0 = \mu_0C_{ox}W/L$. The square law with the given mobility is

$$I_D = \frac12\mu C_{ox}\frac{W}{L}V^2 = \frac12\cdot\frac{\mu_0}{1 + \theta V}C_{ox}\frac{W}{L}V^2 = \frac{k_0V^2}{2(1 + \theta V)},$$

so the current rises less steeply than $V^2$.

### Step 2 — Polynomial approximation

With $\epsilon = \theta V \ll 1$, $(1 + \theta V)^{-1} \approx 1 - \theta V$:

$$I_D \approx \frac{k_0}{2}V^2(1 - \theta V) = \frac{k_0}{2}\left(V^2 - \theta V^3\right).$$

The ideal $V^2$ term gives at most a second harmonic; the new cubic term $-\tfrac{k_0\theta}{2}V^3$ produces the third harmonic. The neglected next term of the series, $+\theta^2V^4$, would change the third harmonic only by a relative amount of order $\theta V_0$.

### Step 3 — Substitute the sinusoidal overdrive

With $V = V_0 + V_m\cos\omega t$ and $V_0 = V_{GS0} - V_{TH}$:

$$
\begin{aligned}
V^2 &= V_0^2 + 2V_0V_m\cos\omega t + V_m^2\cos^2\omega t,\\
V^3 &= V_0^3 + 3V_0^2V_m\cos\omega t + 3V_0V_m^2\cos^2\omega t + V_m^3\cos^3\omega t ,
\end{aligned}
$$

and

$$\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta, \qquad \cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta .$$

Only $\cos^3\omega t$ contains $\cos3\omega t$, and it appears only in the $V_m^3\cos^3\omega t$ term of $V^3$.

### Step 4 — Third harmonic of the drain current

$$-\frac{k_0\theta}{2}\cdot V_m^3\cos^3\omega t \;\supset\; -\frac{k_0\theta}{2}\cdot\frac{V_m^3}{4}\cos3\omega t = -\frac{k_0\theta V_m^3}{8}\cos3\omega t ,$$

so the third-harmonic amplitude of the drain current is

$$I_{D,3} = \frac{\mu_0C_{ox}(W/L)\,\theta\,V_m^3}{8},$$

with a minus sign relative to the fundamental: the mobility degradation *compresses* the peaks.

### Step 5 — Fundamental (for normalization) and second harmonic

**Fundamental** ($\cos\omega t$ terms):

$$
\begin{aligned}
I_{D,1} &= \frac{k_0}{2}\left[2V_0V_m - \theta\left(3V_0^2V_m + \tfrac34V_m^3\right)\right]\\
&= k_0V_0V_m - \tfrac32k_0\theta V_0^2V_m - \tfrac38k_0\theta V_m^3\\
&\approx k_0V_0V_m\left(1 - \tfrac32\theta V_0\right)\qquad(V_m^2 \ll V_0^2\ \text{for the small last term}).
\end{aligned}
$$

**Third-harmonic distortion:**

$$\mathrm{HD3} = \frac{k_0\theta V_m^3/8}{k_0V_0V_m(1 - \tfrac32\theta V_0)} = \frac{\theta V_m^2}{8V_0\,(1 - 1.5\,\theta V_0)} \approx \frac{\theta V_m^2}{8\,(V_{GS0} - V_{TH})}.$$

**Second harmonic,** for comparison ($\cos2\omega t$ terms):

$$I_{D,2} = \frac{k_0}{2}\left[\tfrac12V_m^2 - \theta\cdot\tfrac32V_0V_m^2\right] = \frac{k_0V_m^2}{4}\left(1 - 3\theta V_0\right),$$

slightly reduced by the mobility term, which also introduces the third harmonic absent from the ideal square law.

### Step 6 — Output voltage

$V_{out} = V_{DD} - R_DI_D$ multiplies every AC current component by $-R_D$, so

$$V_{out,3} = R_D\,I_{D,3} = \frac{\mu_0C_{ox}(W/L)\,\theta\,R_D\,V_m^3}{8},$$

and the output HD3 equals that of the current, $\approx \theta V_m^2/[8(V_{GS0} - V_{TH})]$.

**Illustration.** For $\theta = 0.1\ \mathrm{V^{-1}}$, $V_0 = 0.4$ V and $V_m = 0.1$ V (so $\theta V \le 0.05$ and the approximation holds): HD3 $= (0.1)(0.01)/(8\times0.4) = 3.1\times10^{-4} = 0.031\ \%$, whereas HD2 $\approx V_m(1 - 3\theta V_0)/[4V_0(1 - 1.5\theta V_0)] = 5.9\ \%$. The added odd-order distortion is small but matters in differential circuits, where the even-order terms cancel.

### Result

Expanding $I_D = \dfrac{k_0V^2}{2(1 + \theta V)} \approx \dfrac{k_0}{2}(V^2 - \theta V^3)$ with $V = V_0 + V_m\cos\omega t$, only the cubic term yields a third harmonic:

$$I_{D,3} = \frac{\mu_0C_{ox}(W/L)\,\theta\,V_m^3}{8}, \qquad V_{out,3} = R_D\,\frac{\mu_0C_{ox}(W/L)\,\theta\,V_m^3}{8},$$

and relative to the fundamental $k_0V_0V_m(1 - \tfrac32\theta V_0)$:

$$\mathrm{HD3} \approx \frac{\theta V_m^2}{8\,(V_{GS0} - V_{TH})}.$$

**Common mistake.** Concluding that a square-law stage has no third harmonic. The mobility degradation adds the cubic term $-\tfrac{k_0\theta}{2}V^3$, which generates a third harmonic proportional to $\theta V_m^3$.

**Common mistake.** Dropping the $\tfrac14$ of $\cos^3\theta$ (giving $k_0\theta V_m^3/2$), or picking up $\cos3\omega t$ from terms like $3V_0V_m^2\cos^2\omega t$, which feed only DC and the second harmonic. The third harmonic must scale as $V_m^3$ and vanish when $\theta = 0$.
