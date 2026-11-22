# Detailed solution - G293

With $f=1$ the loop gain equals the amplifier gain, $T=a$. Narrowbanding adds a dominant pole $p_D$ far below the original poles and leaves those poles fixed. The standard design rule makes $|T|$ fall at $-20$ dB/dec from its low-frequency value to unity at the first original pole; there the dominant pole contributes $-90^\circ$ and the first original pole about $-45^\circ$, giving a $45^\circ$ phase margin. Then check the rule with the exact magnitude and phase.

### Step 1 — Dominant pole from the design rule

With the new pole, the loop gain is
$$
T(jf_\mathrm{s})=\frac{5000}{\left(1+j\dfrac{f_\mathrm{s}}{|p_D|}\right)\left(1+j\dfrac{f_\mathrm{s}}{300\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$
Above $|p_D|$ and below 300 kHz, the dominant pole alone shapes the magnitude, $|T|\approx5000\,|p_D|/f_\mathrm{s}$. Requiring this asymptote to reach unity at $|p_1|=300$ kHz gives
$$
|p_D|=\frac{|p_1|}{a_0}=\frac{300\ \mathrm{kHz}}{5000}=60\ \mathrm{Hz}.
$$

### Step 2 — Exact check of the phase margin

The actual magnitude at 300 kHz is 3 dB below the asymptote (the 300-kHz pole factor is $\sqrt2$), so the true crossover is lower. Solving $|T|=1$ with $|p_D|=60$ Hz gives $f_c\approx235$ kHz, where the pole phases are
$$
\angle T(f_c)=-\tan^{-1}\frac{235\ \mathrm{kHz}}{60\ \mathrm{Hz}}-\tan^{-1}\frac{235}{300}-\tan^{-1}\frac{235}{2000}-\tan^{-1}\frac{235}{25000}
=-90.0^\circ-38.0^\circ-6.7^\circ-0.5^\circ=-135.2^\circ,
$$
so $\mathrm{PM}\approx44.8^\circ$. The lower crossover reduces the 300-kHz pole's phase below $45^\circ$, which nearly compensates for the $7^\circ$ added by the 2-MHz and 25-MHz poles. Exactly $45^\circ$ requires the three original poles to contribute $45^\circ$ at the crossover, which happens at 233 kHz, and then $|T|=1$ there gives $|p_D|=59.4$ Hz. The required dominant pole is therefore $|p_D|\approx60$ Hz.

### Step 3 — Bandwidth with feedback

With unity feedback, the closed-loop gain is $A=T/(1+T)$. Well below crossover $A\approx1$; above it $A\approx T$ falls off. The bandwidth is therefore approximately the unity-loop-gain frequency: nominally $|p_1|=300$ kHz by the design rule, or 235 kHz with the exact magnitude.

Because a $45^\circ$ margin leaves the closed-loop response underdamped, $|A|$ actually rises by about 2.4 dB near 238 kHz before rolling off, and crosses $-3$ dB at about 400 kHz. Summary: $|p_D|\approx60$ Hz, closed-loop bandwidth ≈ 300 kHz nominally (unity loop gain at about 235 kHz; closed-loop $-3$ dB point near 400 kHz).
