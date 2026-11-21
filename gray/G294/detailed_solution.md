# Detailed solution - G294

A closed-loop gain of 20 dB fixes the feedback factor and hence the low-frequency loop gain $T_0$. A dominant pole $p_D$ is then added so that $|T|$ falls at $-20$ dB/dec from $T_0$ to unity at the first original pole (300 kHz); there the dominant pole gives $-90^\circ$ and the 300-kHz pole about $-45^\circ$, i.e. a $45^\circ$ phase margin. The rule is then checked with the exact loop gain.

### Step 1 — Feedback factor and low-frequency loop gain

A 20-dB closed-loop gain is $A_0=10$. From $A_0=a_0/(1+a_0f)$ with $a_0=5000$:
$$
f=\frac{a_0/A_0-1}{a_0}=\frac{499}{5000}=0.0998,\qquad T_0=a_0f=499 .
$$

### Step 2 — Dominant pole

With frequency-independent $f$, the loop gain is
$$
T(jf_\mathrm{s})=\frac{499}{\left(1+j\dfrac{f_\mathrm{s}}{|p_D|}\right)\left(1+j\dfrac{f_\mathrm{s}}{300\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$
Between $|p_D|$ and 300 kHz, $|T|\approx T_0|p_D|/f_\mathrm{s}$. Setting this asymptote to unity at $|p_1|=300$ kHz:
$$
|p_D|=\frac{|p_1|}{T_0}=\frac{300\ \mathrm{kHz}}{499}=601\ \mathrm{Hz}\approx600\ \mathrm{Hz}.
$$
This is ten times the unity-gain value, because the loop gain to be rolled off is ten times smaller.

### Step 3 — Exact check

Solving $|T|=1$ with $|p_D|=601$ Hz gives $f_c\approx235$ kHz (the real magnitude is 3 dB below the asymptote at 300 kHz). The phase there is
$$
\angle T(f_c)=-90.0^\circ-\tan^{-1}\frac{235}{300}-\tan^{-1}\frac{235}{2000}-\tan^{-1}\frac{235}{25000}=-90.0^\circ-38.0^\circ-6.7^\circ-0.5^\circ\approx-135.1^\circ,
$$
so $\mathrm{PM}\approx45^\circ$. Exactly $45^\circ$ needs the original poles to contribute $45^\circ$ at the crossover (233 kHz), which gives $|p_D|=595$ Hz.

### Step 4 — Bandwidth with feedback

The closed-loop gain is $A=\dfrac1f\cdot\dfrac{T}{1+T}$: it stays at $1/f\approx10$ while $|T|\gg1$ and falls with $|T|$ above the crossover. The bandwidth is therefore about the unity-loop-gain frequency, nominally $|p_1|=300$ kHz (235 kHz exactly); because of the $45^\circ$ margin the response peaks by about 2.4 dB and reaches $-3$ dB near 400 kHz. This is the same bandwidth as in the unity-gain case, and ten times the roughly 30 kHz that an amplifier compensated for unity gain ($|p_D|=60$ Hz) would give at a gain of 10. Result: $|p_D|\approx600$ Hz, bandwidth ≈ 300 kHz.
