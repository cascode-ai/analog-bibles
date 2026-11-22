# Detailed solution - G050

At $A=A_0$ the model gives $Y_{ws}=e^{-1}=36.8\%$, so $A_0$ is simply the die size at which each measured curve crosses 36.8%. With $A_0$ known, evaluate the model at several die sizes and compare it with readings from the curves. On a logarithmic yield axis the model is a straight line, which makes the comparison easy to see.

### Step 1 — $A_0$ from the $e^{-1}$ crossing

Reading the die size at which each curve of [Fig. 1] passes through 36.8%:

| Process | $A_0$ (mil²) |
|---|---|
| A | ≈ 37,000 |
| B | ≈ 20,000 |
| C | ≈ 12,000 |

### Step 2 — Model values and comparison

For example, for process B at 60,000 mil²:

$$
Y_{ws}=\exp\!\left(-\frac{60{,}000\ \mathrm{mil^2}}{20{,}000\ \mathrm{mil^2}}\right)=e^{-3}=5.0\%,
$$

against about 6.9% on the measured curve. The other points:

| Process | Die size (k mil²) | Model (%) | Curve (%) |
|---|---|---|---|
| A | 10 / 40 / 60 / 80 / 100 | 76 / 34 / 20 / 12 / 6.7 | 71 / 34 / 21 / 14.5 / 11 |
| B | 10 / 30 / 60 / 100 | 61 / 22 / 5.0 / 0.67 | 55 / 22 / 6.9 / 2.9 |
| C | 10 / 30 / 50 / 75 | 43 / 8.2 / 1.6 / 0.19 | 42.5 / 8.2 / 2.8 / 1.0 |

### Step 3 — Plot and assessment

![Exponential yield model (solid straight lines on a log axis) compared with the measured curves A, B and C (dashed), which flatten at large die size](/q/G050/solution-curves.svg)

The exponential agrees with the curves within about 10–20% for die sizes up to roughly $2A_0$ (it is slightly optimistic for small dice on curve A). Beyond that it falls much faster than the measured curves, which bend upward on the logarithmic axis ($d^2\ln Y_{ws}/dA^2>0$). The exponential is the Poisson result for a uniform random defect density; real defects are clustered and nonuniform, which leaves more large dice defect-free and produces the observed tail. At large die sizes the model underestimates the yield by about 1.6× for A at 100k mil², 4–5× for B at 100k mil² and 5–6× for C at 75k mil²; the error is largest for the process with the highest defect density.
