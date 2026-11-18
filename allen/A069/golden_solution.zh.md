| $V_S$ | $R$ |
|---|---|
| 1.0 V | ≈ 1.46 kΩ |
| 3.0 V | ≈ 5.25 kΩ |
| 5.0 V | ∞（开关断开） |

- 由于 $I = 0$，沟道两端都处于 $V_S$，因此 $V_{DS} = 0$，$V_{GS} = 5 - V_S$，$V_{SB} = V_S$。
- $r_{ON} = \dfrac{1}{\partial i_D/\partial v_{DS}}\Big|_{v_{DS}=0} = \dfrac{1}{K'(W/L)(V_{GS} - V_T)}$，其中 $K'W/L = 220\ \mu\mathrm{A/V^2}$。
- $V_S = 1$ V：$V_T = 0.7 + 0.4(\sqrt{1.7} - \sqrt{0.7}) = 0.887$ V，$V_{GS} - V_T = 3.113$ V，$r_{ON} = 1/(220\ \mu \times 3.113) = 1460\ \Omega$。
- $V_S = 3$ V：$V_T = 0.7 + 0.4(\sqrt{3.7} - \sqrt{0.7}) = 1.135$ V，$V_{GS} - V_T = 0.865$ V，$r_{ON} = 5253\ \Omega$。
- $V_S = 5$ V：$V_{GS} = 0 < V_T$，晶体管截止：$R \to \infty$（只有漏电流）。
