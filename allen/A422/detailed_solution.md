# Detailed solution - A422

Model the quantization error as a random variable spread evenly over one quantization step, and compute its mean-square value from the probability density. A time-domain calculation for a ramp input gives the same result and makes the assumption concrete.

### Step 1 — The quantization error and its range

A rounding quantizer maps the input $x$ to the nearest level $Q(x)$, which are spaced $\Delta$ apart. The error

$$
e=x-Q(x)
$$

therefore always lies in $[-\Delta/2,\,+\Delta/2]$.

### Step 2 — Statistical model

If the input is busy, i.e. it spans many levels and is uncorrelated with the step pattern, every value of $e$ in that interval is equally likely. The error is then uniformly distributed with probability density

$$
p(e)=\frac1\Delta\quad\text{for }|e|\le\frac\Delta2,\qquad p(e)=0\ \text{otherwise},
$$

which integrates to 1 and gives zero mean by symmetry.

### Step 3 — Mean-square value

$$
e_{rms}^2=\int_{-\Delta/2}^{\Delta/2}e^2\,p(e)\,de
=\frac1\Delta\left[\frac{e^3}3\right]_{-\Delta/2}^{\Delta/2}
=\frac1\Delta\cdot\frac23\Bigl(\frac\Delta2\Bigr)^3
=\frac{\Delta^2}{12},
$$

$$
e_{rms}=\frac\Delta{\sqrt{12}}\approx0.289\,\Delta .
$$

Because the mean is zero, this rms value is also the standard deviation, i.e. the noise power.

### Step 4 — Time-domain check with a ramp

For a slowly rising ramp input that crosses one level every period $T$, the error is a sawtooth that repeats every $T$:

$$
e(t)=\Delta\Bigl(\frac tT-\frac12\Bigr),\qquad 0\le t<T .
$$

Its time-averaged square is

$$
\frac1T\int_0^T\Delta^2\Bigl(\frac tT-\frac12\Bigr)^2dt
=\Delta^2\int_{-1/2}^{1/2}u^2\,du=\frac{\Delta^2}{12},
$$

the same result, since a sawtooth visits every error value in $[-\Delta/2,\Delta/2]$ for an equal time.

For a truncating quantizer the error is uniform on $[0,\Delta]$ instead; it has a dc offset of $\Delta/2$, and its ac part again has rms value $\Delta/\sqrt{12}$.
