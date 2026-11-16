# Golden Solution - A422

## Reference answer

The quantization error $e = x - Q(x)$ of a rounding quantizer lies in $[-\Delta/2, +\Delta/2]$. For a signal that is busy (it spans many levels and is uncorrelated with the step size), $e$ is uniformly distributed over that interval with probability density $1/\Delta$ and zero mean, so

$e_{rms}^2 = \frac{1}{\Delta}\int_{-\Delta/2}^{\Delta/2} e^2\,de = \frac{1}{\Delta}\left[\frac{e^3}{3}\right]_{-\Delta/2}^{\Delta/2} = \frac{\Delta^2}{12}$, hence $e_{rms} = \Delta/\sqrt{12} \approx 0.289\Delta$.

Time-domain version: for a ramp input the error is a sawtooth $e(t) = \Delta(t/T - 1/2)$ repeating every step period $T$, and $\frac{1}{T}\int_0^T \Delta^2(t/T - 1/2)^2\,dt = \Delta^2/12$.

(For a truncating quantizer the error is uniform on $[0, \Delta]$ with mean $\Delta/2$; its ac part still has rms $\Delta/\sqrt{12}$.)

## Grading notes

+2: an explicit uniform-distribution (or sawtooth) model with zero mean and the integral evaluated to $\Delta^2/12$, with the assumption (busy signal / error uniformly distributed over one step) stated. +1: correct result with a sketchy integral or the modelling assumption missing. 0: the result asserted with only a plausibility argument. −2 (asserted as fact): a wrong result such as $\Delta/\sqrt{3}$ or $\Delta/2$ for the rounding quantizer, or an integration error presented as the proof.
