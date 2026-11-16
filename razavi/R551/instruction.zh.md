对于带隙基准（bandgap reference）$V_{REF} = V_{BE} + V_T\ln n$（$V_T = kT/q$，$n$ 为固定的比值），令 $\partial V_{REF}/\partial T = 0$，并利用 $\partial V_{BE}/\partial T = [V_{BE} - (4 + m)V_T - E_g/q]/T$，可得温度系数（temperature coefficient）为零时的基准电压值
$V_{REF} = \dfrac{E_g}{q} + (4 + m)V_T$，
其中 $E_g$ 是硅的禁带宽度（bandgap energy），$m \approx -3/2$ 是迁移率（mobility）的温度指数。由于硅的禁带宽度只有很小的温度系数，这一表达式似乎表明 $\partial V_{REF}/\partial T \propto (4 + m)k/q$，这是一个相当大的值，而 $V_{REF}$ 恰恰是为了使其温度系数为零才推导出来的。说明这一论证的错误所在。
