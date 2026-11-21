# Detailed solution - G295

Here the existing 300-kHz pole is moved down to a new dominant position $p_1'$, so the remaining non-dominant poles are only those at 2 MHz and 25 MHz. With $f=1$, $T=a$. The same $45^\circ$ design rule applies, but now the gain must fall at $-20$ dB/dec from 5000 to unity at the **second** pole, 2 MHz. Then check with the exact loop gain.

### Step 1 — Loop gain after moving the pole

$$
T(jf_\mathrm{s})=\frac{5000}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$
The 300-kHz pole no longer exists; it has become $p_1'$.

### Step 2 — Dominant pole from the design rule

Between $|p_1'|$ and 2 MHz, $|T|\approx5000\,|p_1'|/f_\mathrm{s}$. Setting this to unity at 2 MHz, where the dominant pole gives $-90^\circ$ and the 2-MHz pole about $-45^\circ$:
$$
|p_1'|=\frac{2\ \mathrm{MHz}}{5000}=400\ \mathrm{Hz}.
$$

### Step 3 — Exact check

With $|p_1'|=400$ Hz, solving $|T|=1$ gives $f_c\approx1.57$ MHz (the real magnitude is 3 dB below the asymptote at 2 MHz). There
$$
\angle T(f_c)=-90.0^\circ-\tan^{-1}\frac{1.57}{2}-\tan^{-1}\frac{1.57}{25}=-90.0^\circ-38.1^\circ-3.6^\circ=-131.7^\circ,
$$
so $\mathrm{PM}\approx48^\circ$, slightly better than required. Exactly $45^\circ$ needs the 2-MHz and 25-MHz poles to contribute $45^\circ$ at the crossover, $\tan^{-1}(f_c/2\ \mathrm{MHz})+\tan^{-1}(f_c/25\ \mathrm{MHz})=45^\circ$, which gives $f_c=1.74$ MHz; requiring $|T|=1$ there gives $|p_1'|=462$ Hz. The design value is therefore $|p_1'|\approx400$ Hz (460 Hz for exactly $45^\circ$).

### Step 4 — Bandwidth with feedback

With unity feedback, $A=T/(1+T)\approx1$ below the crossover and rolls off above it, so the bandwidth is about the unity-loop-gain frequency: nominally 2 MHz by the design rule, or 1.6–1.7 MHz exactly. Including the peaking caused by the finite margin (about 1.8 dB for 400 Hz), the closed-loop $-3$ dB point is near 2.6 MHz (2.9 MHz for the exact $45^\circ$ design).

Compared with adding a new dominant pole (60 Hz, bandwidth ≈ 300 kHz), moving the existing pole removes the 300-kHz pole from the loop and pushes the crossover up to the 2-MHz pole, giving roughly seven times the bandwidth. Result: $|p_1'|\approx400$ Hz, bandwidth ≈ 2 MHz.
