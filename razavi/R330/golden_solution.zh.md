分为 $n$ 个相等的电阻段时，总的漏极噪声电流为 $\overline{I_n^2} = 4kT R_G\,g_m^2\,\dfrac{(n+1)(2n+1)}{6n^2} \to 4kT\dfrac{R_G}{3}g_m^2$（$n \to \infty$），这恰好等于与栅极串联的单个集总电阻 $R_G/3$ 产生的漏极噪声。

- 每个单元晶体管的跨导（transconductance）为 $g_m/n$；每个电阻段 $R_{Gj} = R_G/n$ 具有串联噪声电压 $V_j$，$\overline{V_j^2} = 4kTR_G/n$。
- 没有栅极电流，因此 $V_j$ 使电阻段 $j$ 下游的每个单元晶体管（晶体管 $j, j+1, \dots, n$）的栅极电压都变化相同的 $V_j$。它们的漏极电流完全相关，应按电流直接相加：$I_{D}|_{V_j} = (n - j + 1)\dfrac{g_m}{n}V_j$。
- 不同电阻段的噪声互不相关，因此功率相加：$\overline{I_n^2} = \sum_{j=1}^{n}\left(\dfrac{g_m}{n}\right)^2 (n-j+1)^2\dfrac{4kTR_G}{n} = \dfrac{4kTR_Gg_m^2}{n^3}\sum_{k=1}^{n}k^2 = 4kTR_Gg_m^2\dfrac{n(n+1)(2n+1)}{6n^3}$。
- 当 $n \to \infty$ 时该因子趋于 1/3（连续形式：$\int_0^1(1-x)^2dx = 1/3$）。与栅极串联的集总电阻 $R_{eq}$ 给出 $4kTR_{eq}g_m^2$，因此 $R_{eq} = R_G/3$。
