$R_{s2} = \dfrac{r_{ds2} + R_D}{1 + g_{m2}r_{ds2}}$，其中 $R_D$ 是从 M2 漏极到交流地的小信号电阻。采用共源共栅电流源时，$R_D \approx g_mr_{ds}^2$，因此 $R_{s2} \approx g_mr_{ds}^2/(g_mr_{ds}) = r_{ds}$。

- 推导：向 M2 的源极注入测试电流 $i$（栅极为交流地）。它流过 M2，从漏极流出进入 $R_D$，因此 $v_d = iR_D$。M2 从漏极到源极的电流为 $-i = g_{m2}(0 - v_s) + (v_d - v_s)/r_{ds2}$；代入 $v_d$ 得 $v_s(1+g_{m2}r_{ds2}) = i(r_{ds2}+R_D)$。
- 简单负载：$R_D = r_{ds3}$ ≈ $r_{ds}$ → $R_{s2} \approx 2r_{ds}/(g_mr_{ds}) = 2/g_m$。
- 共源共栅负载（电流源 M4 加共源共栅管 M3'）：$R_D = r_{ds3'} + r_{ds4} + g_{m3'}r_{ds3'}r_{ds4} \approx g_mr_{ds}^2$ → $R_{s2} = (r_{ds} + g_mr_{ds}^2 + r_{ds})/(1+g_mr_{ds}) \approx r_{ds}$。
- 原理：从源极看进去的电阻由漏极所接的电阻决定，大约再除以 $g_mr_{ds}$。
