# Detailed solution - G127

Express the sum and difference of the normalized gain errors through the power-series coefficients, then compare with the given small-distortion formulas for $HD_2$ and $HD_3$.

### Step 1 — Gain errors in terms of the coefficients

The incremental gain is $A_v=dv_o/dv_i=a_1+2a_2v_i+3a_3v_i^2$, so at $v_i=\pm\hat v_i$ and $v_i=0$

$$
A_v^\pm=a_1\pm2a_2\hat v_i+3a_3\hat v_i^2,\qquad A_{vQ}=a_1,
$$
$$
E^\pm=\frac{A_v^\pm-A_{vQ}}{A_{vQ}}=\pm2\frac{a_2}{a_1}\hat v_i+3\frac{a_3}{a_1}\hat v_i^2 .
$$

Hence

$$
E^+-E^-=4\frac{a_2}{a_1}\hat v_i,\qquad E^++E^-=6\frac{a_3}{a_1}\hat v_i^2 .
$$

### Step 2 — Relate to the harmonic distortion

The given small-distortion results are $HD_2\approx\tfrac12(a_2/a_1)\hat v_i$ and $HD_3\approx\tfrac14(a_3/a_1)\hat v_i^2$. Comparing with Step 1, $E^+-E^-=8\cdot\tfrac12(a_2/a_1)\hat v_i$ and $E^++E^-=24\cdot\tfrac14(a_3/a_1)\hat v_i^2$, so

$$
HD_2\approx\frac{E^+-E^-}{8},\qquad HD_3\approx\frac{E^++E^-}{24}.
$$

The asymmetry of the incremental gain between the two extremes measures the second harmonic, and the common change of gain at both extremes measures the third harmonic. The signs follow the definitions: $HD_3$ comes out negative when the gain drops at both extremes ($a_3/a_1<0$, compressive). These relations let distortion be estimated from three slopes of a transfer characteristic, without a Fourier analysis.
