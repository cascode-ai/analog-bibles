# Detailed solution - G292

For each closed-loop gain, find the low-frequency loop gain $T_0$, locate the unity-loop-gain frequency $f_c$ of the three-pole loop gain, and take $\mathrm{PM}=180^\circ+\angle T(f_c)$. Because $f$ is frequency independent, $T=f\,a$ has the poles of $a$ (2 kHz, 200 kHz, 4 MHz) and only $T_0$ changes between the two cases.

### Step 1 — Low-frequency loop gains

From $A_0=a_0/(1+T_0)$ with $a_0=40{,}000$:
$$
T_0=\frac{a_0}{A_0}-1=
\begin{cases}
199, & A_0=200,\\
399, & A_0=100.
\end{cases}
$$
The loop gain is
$$
|T(f_\mathrm{s})|=\frac{T_0}{\sqrt{\left[1+\left(\dfrac{f_\mathrm{s}}{2\ \mathrm{kHz}}\right)^2\right]\left[1+\left(\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)^2\right]\left[1+\left(\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)^2\right]}},\qquad
\angle T=-\sum_{p}\tan^{-1}\frac{f_\mathrm{s}}{f_p}.
$$

### Step 2 — Case $A_0=200$

Using only the dominant pole, $|T|=1$ would occur near $199\times2\ \mathrm{kHz}\approx400$ kHz, above the second pole, so its attenuation must be included. Solving $|T|=1$ numerically gives $f_c\approx249$ kHz; there the pole factors are $124.4$, $1.60$ and $1.00$, whose product is 199. The phase is
$$
\angle T(f_c)=-\tan^{-1}\frac{249}{2}-\tan^{-1}\frac{249}{200}-\tan^{-1}\frac{249}{4000}=-89.5^\circ-51.2^\circ-3.6^\circ=-144.3^\circ,
$$
so $\mathrm{PM}\approx35.7^\circ\approx36^\circ$.

### Step 3 — Case $A_0=100$

The same procedure with $T_0=399$ gives $f_c\approx374$ kHz (pole factors $187.2$, $2.12$, $1.00$):

| $A_0$ | $T_0$ | $f_c$ (kHz) | Pole phases at $f_c$ | $\angle T(f_c)$ | PM |
|---|---|---|---|---|---|
| 200 | 199 | 249 | $-89.5^\circ,\ -51.2^\circ,\ -3.6^\circ$ | $-144.3^\circ$ | $\approx36^\circ$ |
| 100 | 399 | 374 | $-89.7^\circ,\ -61.9^\circ,\ -5.3^\circ$ | $-156.9^\circ$ | $\approx23^\circ$ |

### Step 4 — Trend

Lower closed-loop gain means more feedback (larger $T_0$), which moves the crossover up toward and past the 200-kHz pole. The second pole's phase contribution grows from $51^\circ$ to $62^\circ$, and the margin falls from about $36^\circ$ to about $23^\circ$. If the crossover is instead estimated from the $-40$ dB/dec asymptote above 200 kHz, $f_c\approx282$ kHz and 400 kHz, giving margins of about $31^\circ$ and $21^\circ$; the exact magnitude gives $36^\circ$ and $23^\circ$.
