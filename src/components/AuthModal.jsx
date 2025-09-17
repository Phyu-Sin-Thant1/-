import React, { useState } from 'react'

const AuthModal = ({ isOpen, onClose, initialView = 'login' }) => {
  const [currentView, setCurrentView] = useState(initialView)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email: formData.email, password: formData.password })
    // Handle login logic here
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    console.log('Sign up attempt:', formData)
    // Handle sign up logic here
  }

  const handleSocialLogin = (provider) => {
    console.log('Social login with:', provider)
    // Handle social login logic here
  }

  const checkEmailDuplicate = () => {
    console.log('Checking email duplicate for:', formData.email)
    // Handle email duplicate check
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-8">
            {currentView === 'login' ? (
              // Login View
              <div>
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-display">
                  로그인
                </h2>

                {/* Social Login */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 text-center mb-4 font-body">간편 로그인</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleSocialLogin('kakao')}
                      className="flex items-center justify-center px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg font-medium transition-colors font-body"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C7.03 3 3 6.14 3 10.1c0 2.52 1.65 4.73 4.14 6.05l-.95 3.46c-.06.22.14.39.33.29L10.3 17.9c.56.08 1.13.12 1.7.12 4.97 0 9-3.14 9-7.02S16.97 3 12 3z"/>
                      </svg>
                      카카오
                    </button>
                    <button
                      onClick={() => handleSocialLogin('naver')}
                      className="flex items-center justify-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors font-body"
                    >
                      <span className="text-lg font-bold mr-2">N</span>
                      네이버
                    </button>
                    <button
                      onClick={() => handleSocialLogin('google')}
                      className="flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors font-body"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      구글
                    </button>
                    <button
                      onClick={() => handleSocialLogin('apple')}
                      className="flex items-center justify-center px-4 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors font-body"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09v-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      애플
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500 font-body">또는</span>
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="이메일 주소"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dabang-primary focus:border-transparent font-body"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="비밀번호"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dabang-primary focus:border-transparent font-body"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-dabang-primary hover:bg-dabang-primary/90 text-white py-3 px-4 rounded-lg font-medium transition-colors font-body"
                  >
                    로그인
                  </button>
                </form>

                {/* Recovery Links */}
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-gray-600 hover:text-dabang-primary transition-colors font-body">
                    ID/비밀번호 찾기
                  </a>
                </div>

                {/* Switch to Sign Up */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 font-body">
                    계정이 없으신가요?{' '}
                    <button
                      onClick={() => setCurrentView('signup')}
                      className="text-dabang-primary hover:text-dabang-primary/80 font-medium transition-colors"
                    >
                      회원가입
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              // Sign Up View
              <div>
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-display">
                  회원가입
                </h2>

                {/* Sign Up Form */}
                <form onSubmit={handleSignUp} className="space-y-4">
                  {/* Email with Duplicate Check */}
                  <div>
                    <div className="flex space-x-2">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="이메일 주소"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dabang-primary focus:border-transparent font-body"
                        required
                      />
                      <button
                        type="button"
                        onClick={checkEmailDuplicate}
                        className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors font-body whitespace-nowrap"
                      >
                        중복확인
                      </button>
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="비밀번호"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dabang-primary focus:border-transparent font-body"
                      required
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="비밀번호 확인"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dabang-primary focus:border-transparent font-body"
                      required
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="이름"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dabang-primary focus:border-transparent font-body"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="휴대폰 번호"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dabang-primary focus:border-transparent font-body"
                      required
                    />
                  </div>

                  {/* Legal Checkboxes */}
                  <div className="space-y-3 pt-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-dabang-primary focus:ring-dabang-primary border-gray-300 rounded"
                        required
                      />
                      <span className="text-sm text-gray-700 font-body">
                        <span className="text-red-500">*</span> 이용약관에 동의합니다. {' '}
                        <a href="#" className="text-dabang-primary hover:underline">
                          [보기]
                        </a>
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-dabang-primary focus:ring-dabang-primary border-gray-300 rounded"
                        required
                      />
                      <span className="text-sm text-gray-700 font-body">
                        <span className="text-red-500">*</span> 개인정보 처리방침에 동의합니다. {' '}
                        <a href="#" className="text-dabang-primary hover:underline">
                          [보기]
                        </a>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.agreeTerms || !formData.agreePrivacy}
                    className="w-full bg-dabang-primary hover:bg-dabang-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors font-body"
                  >
                    회원가입 완료
                  </button>
                </form>

                {/* Switch to Login */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 font-body">
                    이미 계정이 있으신가요?{' '}
                    <button
                      onClick={() => setCurrentView('login')}
                      className="text-dabang-primary hover:text-dabang-primary/80 font-medium transition-colors"
                    >
                      로그인
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthModal